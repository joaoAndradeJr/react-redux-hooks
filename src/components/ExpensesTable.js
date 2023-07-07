import React from 'react';
import TableHeader from './TableHeader';
import { useSelector } from 'react-redux';

export default function ExpensesTable() {
  const { expenses } = useSelector((state) => state.wallet);

  return (
    <table>
      <TableHeader />
      <tbody>
        {expenses.map((expense) => (
          <tr key="expense.id">
            <td>{expense.description}</td>
            <td>{expense.tag}</td>
            <td>{expense.method}</td>
            <td>{Number(expense.value).toFixed(2)}</td>
            <td>{expense.exchangeRates[expense.currency].name}</td>
            <td>{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</td>
            <td>
              {Number(expense.value * expense.exchangeRates[expense.currency].ask)
                .toFixed(2)}
            </td>
            <td>Real</td>
            <td>
              <button
                type="button"
                onClick={ () => {} }
              >
                Editar
              </button>
              <button
                type="button"
                onClick={ () => {} }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
