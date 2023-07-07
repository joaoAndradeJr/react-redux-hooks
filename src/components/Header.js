import React from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const { name } = useSelector((state) => state.user);
  const { total } = useSelector((state) => state.wallet);

  return (
    <header>
      <h2>{ `Seja bem-vindo(a) ${name}` }</h2>
      <p>{ `Total de despesas em BRL: ${total.toFixed(2)}` }</p>
    </header>
  );
}
