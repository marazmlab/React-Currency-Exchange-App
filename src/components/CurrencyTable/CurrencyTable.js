import React from "react";
import PropTypes from "prop-types";
import { Table, TableHead, TableRow, TableCell, TableBody, TableWrapper, PortfolioSummary } from "./CurrencyTable.styled";

const CurrencyTable = ({ currencies, onRemove, portfolioSummary = null }) => {
    console.log("Rendering CurrencyTable with currencies:", currencies);
    return (
        <TableWrapper>
            {portfolioSummary && (
            <PortfolioSummary>
                <h3>Portfolio Summary</h3>
                <div className="total-value">
                    Total Value: {portfolioSummary.totalValue} EUR
                </div>
                <div className={`profit-loss ${portfolioSummary.totalProfitLoss >= 0 ? 'positive' : 'negative'}`}>
                    Total Profit/Loss: {portfolioSummary.totalProfitLoss >= 0 ? '+' : ''}{portfolioSummary.totalProfitLoss} EUR 
                    ({portfolioSummary.totalProfitLossPercent >= 0 ? '+' : ''}{portfolioSummary.totalProfitLossPercent}%)
                </div>
            </PortfolioSummary>
        )}
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Currency</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Purchase Date</TableCell>
                        <TableCell>Purchase Price (EUR)</TableCell>
                        <TableCell>Current Value (EUR)</TableCell>
                        <TableCell>Profit / Loss</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {currencies.map((currency) => (
                        <TableRow key={currency.id}>
                            <TableCell>{currency.currency}</TableCell>
                            <TableCell>{currency.amount}</TableCell>
                            <TableCell>{currency.date}</TableCell>
                            <TableCell>{currency.price}</TableCell>
                            <TableCell>{currency.currentValue}</TableCell>
                            <TableCell>{currency.profitLoss}</TableCell>
                            <TableCell>
                                <button
                                    style={{
                                        color: 'red'
                                    }} 
                                    onClick={() => onRemove(currency.id)}>
                                    Usuń
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableWrapper>
    );
};

CurrencyTable.propTypes = {
    currencies: PropTypes.array.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default CurrencyTable;