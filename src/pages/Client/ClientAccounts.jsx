import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import apiCaller from "../../utils/apiCaller";
import Card from "../../components/Card/Card";
import "../Clients/clients.styles.css";

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
      <header>
        <h1>Accounts</h1>
      </header>
      <section className="cards-clients">
        {isFetching ? (
          <h1>Loading...</h1>
        ) : isError ? (
          <h1>Error</h1>
        ) : accounts.length ? (
          accounts.map((account) => (
            <a href={`/${account.accountNumber}`} key={account.accountNumber}>
              <Card info={account} />
            </a>
          ))
        ) : (
          <h3 className="no-account-title">No hay cuentas</h3>
        )}
      </section>
    </div>
  );
};

export default ClientAccounts;
