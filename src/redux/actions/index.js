import {
  ADD_EXPENSE,
  CHANGE_IS_LOADING, FETCH_CURRENCIES_FAILURE, FETCH_CURRENCIES_SUCCESS,
} from '../../utils/types';

const fetchCurrenciesFailure = (error) => ({
  type: FETCH_CURRENCIES_FAILURE,
  error,
});

const changeIsLoading = (isLoading) => ({
  type: CHANGE_IS_LOADING,
  isLoading,
});

const fetchCurrenciesSuccess = (currencies) => ({
  type: FETCH_CURRENCIES_SUCCESS,
  currencies,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(changeIsLoading(true));
  return fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => {
      const currencies = Object.keys(data)
        .filter((currency) => currency !== 'USDT');
      dispatch(fetchCurrenciesSuccess(currencies));
      dispatch(changeIsLoading(false));
      return data;
    })
    .catch((error) => dispatch(fetchCurrenciesFailure(error)));
};
