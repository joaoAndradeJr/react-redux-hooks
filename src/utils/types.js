export const LOGIN = 'LOGIN';
export const FETCH_CURRENCIES_FAILURE = 'FETCH_CURRENCIES_FAILURE';
export const CHANGE_IS_LOADING = 'CHANGE_IS_LOADING';
export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const paymentOptions = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
export const tagOptions = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
export const  INITIAL_STATE = {
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};
