import React from "react";
import PropTypes from "prop-types";
import { Table, TableHead, TableRow, TableCell, TableBody, TableWrapper } from "./CurrencyTable.styled";

const CurrencyTable = ({ currencies, onRemove }) => {
    console.log("Rendering CurrencyTable with currencies:", currencies);
    return (
        <TableWrapper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Currency</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Purchuase Date</TableCell>
                        <TableCell>Purchuase Price</TableCell>
                        <TableCell>Current Value</TableCell>
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