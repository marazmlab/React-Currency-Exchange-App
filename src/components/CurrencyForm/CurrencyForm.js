import React from "react";
import PropTypes from 'prop-types';
import { Form, Input, Button } from './CurrencyForm.styled'

const CurrencyForm = ({ onSubmit, formData, onChange }) => {
    return (
        <Form onSubmit={onSubmit}>
            <label>
                <Input
                    placeholder="Currency"
                    type="text"
                    name="currency"
                    value={formData.currency}
                    onChange={onChange}
                    required
                />
            </label>
            <label>
                <Input
                    placeholder="Amount"
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={onChange}
                    required
                    min="0"
                />
            </label>
            <label>
                <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={onChange}
                    required
                />
            </label>
            <label>
                <Input
                    placeholder="Purchase Price"
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={onChange}
                    required
                    min="0"
                    step="0.01"
                />
            </label>
            <Button type="submit">Add Currency</Button>
        </Form>
    )
};

CurrencyForm.PropTypes = {
    onSubmit: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default CurrencyForm;