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
        return {
            ...currency,
            currentValue: rate ? (currency.amount * rate).toFixed(2) : "N/A",
        }
    })

    return (
        <CurrencyTable 
            currencies={currenciesWithCurrentValue} 
            onRemove={handleRemove}
        />
    );
};

export default CurrencyTableContainer;