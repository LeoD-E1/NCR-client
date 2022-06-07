import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import apiCaller from "../../utils/apiCaller";

const ClientAccounts = () => {
  const [location] = useLocation();

  const [accounts, setAccounts] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const [isError, setError] = useState(false);

  const getAccounts = async () => {
    setFetching(true);
    try {
      const accounts = await apiCaller(`${location}`);
      setAccounts(accounts);
    } catch (error) {
      setError(true);
    }
    setFetching(false);
  };

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <div>
      {isFetching ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>Error</h1>
      ) : accounts.length ? (
        accounts.map((account) => (
          <div key={account.accountNumber}>
            <h3>Account Number: {account.accountNumber}</h3>
            <h3>Balance : {account.balance}</h3>
          </div>
        ))
      ) : (
        <h3 className="no-clients-title">No hay cuentas</h3>
      )}
    </div>
  );
};

export default ClientAccounts;
