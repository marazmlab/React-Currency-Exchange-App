export const addCurrency = (currency) => ({
  type: 'ADD_CURRENCY',
  payload: currency,
});

export const removeCurrency = (id) => ({
  type: 'REMOVE_CURRENCY',
  payload: id,
});