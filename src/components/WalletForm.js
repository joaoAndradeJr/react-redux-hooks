import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INITIAL_STATE, paymentOptions, tagOptions } from '../utils/types';
import { addExpense, fetchCurrencies } from '../redux/actions';

export default function WalletForm() {
  const { currencies } = useSelector((state) => state.wallet);
  const [state, setState] = useState({ ...INITIAL_STATE, id: 0 });
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(fetchCurrencies())
      .then((data) => {
        dispatch(addExpense({ ...state, exchangeRates: data }));
        setState((prevState) => ({ ...INITIAL_STATE, id: prevState.id + 1 }));
      });
  };

  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();
        handleSubmit();
      } }
    >
      <label htmlFor="value">
        Valor
        <input
          type="number"
          id="value"
          name="value"
          value={ state.value }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="description">
        Descrição
        <input
          type="text"
          id="description"
          name="description"
          value={ state.description }
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="currency">
        Moeda
        <select
          id="currency"
          name="currency"
          value={ state.currency }
          onChange={ handleChange }
        >
          {currencies.map((currency) => (
            <option key={ currency }>{ currency }</option>
          ))}
        </select>
      </label>
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
          name="method"
          value={ state.method }
          onChange={ handleChange }
        >
          {paymentOptions.map((option) => (
            <option key={ option }>{ option }</option>
          ))}
        </select>
      </label>
      <label htmlFor="tag">
        Tag
        <select
          id="tag"
          name="tag"
          value={ state.tag }
          onChange={ handleChange }
        >
          {tagOptions.map((option) => (
            <option key={ option }>{ option }</option>
          ))}
        </select>
      </label>
      <button>Adicionar despesa</button>
    </form>
  );
}
