import React, {useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCurrency } from "../../redux/actions/currencyActions";

import CurrencyTable from "../../components/CurrencyTable";
import fetchExchangeRate from "../../services/fetchExchangeRate";

const CurrencyTableContainer = () => {
    const currencies = useSelector((state) => state.currency.currencies);
    const [exchangeRates, setExchangeRates] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        const getExchangeRates = async () => {
            const rates = await fetchExchangeRate();
            if (rates) {
                setExchangeRates(rates);
            }
        };

        getExchangeRates();
    }, []);

    const handleRemove = (id) => {
        const existingData = JSON.parse(localStorage.getItem('currencies')) || [];
        const updatedData = existingData.filter((currency) => currency.id !== id);
        localStorage.setItem('currencies', JSON.stringify(updatedData));

        dispatch(removeCurrency(id));
    };

    const currenciesWithCurrentValue = currencies.map((currency) => {
        const rate = exchangeRates[currency.currency];
        const currentValue = rate ? (currency.amount / rate) : 0;
        const purchaseValue = (currency.amount / currency.price);
        const profitLoss = currentValue - purchaseValue;
        const profitLossPercent = purchaseValue > 0 ? ((profitLoss / purchaseValue) * 100) : 0;

        return {
            ...currency,
            currentValue: rate ? (currency.amount / rate).toFixed(2) : "N/A",
            profitLoss: rate ?
                `${profitLoss >= 0 ? '+' : ''}${profitLoss.toFixed(2)} EUR (${profitLossPercent >= 0 ? '+' : ''}${profitLossPercent.toFixed(1)}%)` 
                : "N/A",
        }
    });

    const portfolioSummary = currenciesWithCurrentValue.reduce((summary, currency) => {
        if (currency.currentValue !== "N/A") {
            const currentVal = parseFloat(currency.currentValue);
            const purchaseVal = currency.amount / currency.price;
            const profitLoss = currentVal - purchaseVal;
            
            return {
                totalValue: summary.totalValue + currentVal,
                totalPurchaseValue: summary.totalPurchaseValue + purchaseVal,
                totalProfitLoss: summary.totalProfitLoss + profitLoss,
            };
        }
        return summary;
    }, { totalValue: 0, totalPurchaseValue: 0, totalProfitLoss: 0 });

    const totalProfitLossPercent = portfolioSummary.totalPurchaseValue > 0 
        ? ((portfolioSummary.totalProfitLoss / portfolioSummary.totalPurchaseValue) * 100)
        : 0;

    const summaryData = {
        totalValue: portfolioSummary.totalValue.toFixed(2),
        totalProfitLoss: portfolioSummary.totalProfitLoss.toFixed(2),
        totalProfitLossPercent: totalProfitLossPercent.toFixed(1),
    };

    return (
        <CurrencyTable 
            currencies={currenciesWithCurrentValue} 
            onRemove={handleRemove}
            portfolioSummary={summaryData}
        />
    );
};

export default CurrencyTableContainer;