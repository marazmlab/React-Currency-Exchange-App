const initialState = {
    currencies: [],
};

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CURRENCY':
            return {
                ...state,
                currencies: [...state.currencies, action.payload],
            };
        case 'REMOVE_CURRENCY':
            return {
                ...state,
                currencies: state.currencies.filter(
                    (currency) => currency.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default currencyReducer;