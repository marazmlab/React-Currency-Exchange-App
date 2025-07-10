import React from "react";
import PropTypes from 'prop-types';
import { Form, Input, Button, Select } from './CurrencyForm.styled'

const CurrencyForm = ({ onSubmit, formData, onChange }) => {
    return (
        <Form onSubmit={onSubmit}>
            <label>
                <Select
                    name="currency"
                    value={formData.currency}
                    onChange={onChange}
                    required
                >
                    <option value="">Select Currency</option>
                    <option value="USD">🇺🇸 USD - US Dollar</option>
                    <option value="EUR">🇪🇺 EUR - Euro</option>
                    <option value="PLN">🇵🇱 PLN - Polish Złoty</option>
                    <option value="GBP">🇬🇧 GBP - British Pound</option>
                    <option value="JPY">🇯🇵 JPY - Japanese Yen</option>
                    <option value="CHF">🇨🇭 CHF - Swiss Franc</option>
                    <option value="ISK">🇮🇸 ISK - Icelandic Króna</option>
                    <option value="NOK">🇳🇴 NOK - Norwegian Krone</option>
                    <option value="SEK">🇸🇪 SEK - Swedish Krona</option>
                    <option value="DKK">🇩🇰 DKK - Danish Krone</option>
                </Select>
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