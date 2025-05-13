const fetchExchangeRate = async (targetCurrency = null, date = 'latest') => {
    const API_KEY = 'd4fc05d2e0918ea984d9e900ba8f6147'; // Wstaw swój klucz API
    const isValidDate = date === 'latest' || /^\d{4}-\d{2}-\d{2}$/.test(date);

    if (!isValidDate) {
        console.error("Invalid date format. Please use 'YYYY-MM-DD' or 'latest'.");
        return null;
    }

    const url = `https://api.exchangeratesapi.io/${date}?access_key=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Full API response:", data);

        if (!data.success) {
            console.error("API error:", data.error);
            throw new Error(data.error.type || "Unknown API error");
        }

        if (data && data.rates) {
            if (targetCurrency) {
                if (data.rates[targetCurrency]) {
                    return { [targetCurrency]: data.rates[targetCurrency] };
                } else {
                    console.error(`Currency ${targetCurrency} is not available in the rates data.`);
                    return null;
                }
            }
            return data.rates;
        } else {
            console.error("Rates data is missing or invalid.");
            return null;
        }
    } catch (error) {
        console.error("Error fetching exchange rate:", error);
        return null;
    }
};

export default fetchExchangeRate;