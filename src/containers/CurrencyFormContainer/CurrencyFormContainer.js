import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCurrency } from '../../redux/actions/currencyActions';
import CurrencyForm from "../../components/CurrencyForm";

const CurrencyFormContainer = () => {
    const [formData, setFormData] = useState({
        currency: '',
        amount: '',
        date: '',
        price: '',
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData, 
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addCurrency({ ...formData, id: Date.now() }));
        setFormData({
            currency: '',
            amount: '',
            date: '',
            price: '',
        });
    };

    return (
        <CurrencyForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    );
};

export default CurrencyFormContainer;