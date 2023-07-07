import {
  ADD_EXPENSE,
  CHANGE_IS_LOADING, FETCH_CURRENCIES_FAILURE, FETCH_CURRENCIES_SUCCESS,
} from '../../utils/types';

const initialState = {
  currencies: [],
  expenses: [],
  total: 0,
  isLoading: false,
  error: false,
};

export default function wallet(state = initialState, action) {
  switch (action.type) {
  case CHANGE_IS_LOADING:
    return {
      ...state,
      isLoading: action.isLoading,
    };
  case FETCH_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: action.currencies,
    };
  case FETCH_CURRENCIES_FAILURE:
    return {
      ...state,
      error: action.error,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
      total: state.total + Number(action.expense.value * action.expense.exchangeRates[action.expense.currency].ask)
    };
  default:
    return state;
  }
}
