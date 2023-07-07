import React from 'react';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../utils/types';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [name, setName] = React.useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const saveName = () => {
    dispatch({ type: LOGIN, payload: name });
    history.push('/wallet');
  };

  return (
    <form>
      <label htmlFor="name-input">
        Name
        <input
          id="name-input"
          type="text"
          onChange={ ({ target }) => { setName(target.value) } }
        />
      </label>
      <button
        type="button"
        disabled={ name.length < 4 }
        onClick={ saveName }
      >
        Entrar
      </button>
    </form>
  );
}
