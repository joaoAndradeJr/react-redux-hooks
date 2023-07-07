import React, { useEffect } from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrencies } from '../redux/actions';
import ExpensesTable from '../components/ExpensesTable';

export default function Wallet() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.wallet);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <WalletForm />
      <ExpensesTable />
    </>
  );
}
