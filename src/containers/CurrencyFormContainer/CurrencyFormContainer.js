import React, { useState, useEffect } from "react";
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

    // Funkcja do zapisu danych w localStorage
    const saveToLocalStorage = (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    };

    // Funkcja do odczytu danych z localStorage
    const loadFromLocalStorage = (key) => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    };

    // Obsługa zmiany w polach formularza
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData, 
            [name]: value,
        }));
    };

    // Obsługa wysyłania formularza
    const handleSubmit = (e) => {
        e.preventDefault();

        const newCurrency = { ...formData, id: Date.now() };
        const existingData = loadFromLocalStorage('currencies');
        const updateData = [...existingData, newCurrency];

        saveToLocalStorage('currencies', updateData);
    
        dispatch(addCurrency(newCurrency));

        setFormData({
            currency: '',
            amount: '',
            date: '',
            price: '',
        });
    };

    useEffect(() => {
        const savedCurrencies = loadFromLocalStorage('currencies');
        savedCurrencies.forEach((currency) => {
            dispatch(addCurrency(currency));
        });
    }, [dispatch]);

    return (
        <CurrencyForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
    );
};

export default CurrencyFormContainer;