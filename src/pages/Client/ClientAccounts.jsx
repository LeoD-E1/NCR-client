import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import apiCaller from "../../utils/apiCaller";
import Card from "../../components/Card/Card";
import "../Clients/clients.styles.css";
import Layout from "../../components/Layout/Layout";
import Transfers from "../../components/transfers/Transfers";

const ClientAccounts = () => {
  const [location] = useLocation();
  const clientNumber = location.split("/")[2];

  const [accounts, setAccounts] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(true);

  const limitAccounts = !limit ? accounts.length : 5;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <h1>Accounts</h1>
        {accounts.length >= 5 && (
          <button onClick={() => setLimit(!limit)}>
            {limit ? "Show more" : "Show less"}
          </button>
        )}
      </header>
      <section className="cards-clients">
        {fetching ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : accounts.length ? (
          accounts.slice(0, limitAccounts).map((account) => (
            <a
              href={`${location}/${account.accountNumber}`}
              key={account.accountNumber}
            >
              <Card info={account} type="account" />
            </a>
          ))
        ) : (
          <h3 className="no-account-title">No hay cuentas</h3>
        )}
      </section>
      <section className="transfers">
        <Transfers clientNumber={clientNumber} />
      </section>
    </div>
  );
};

const ClientAccountsPage = () => (
  <Layout>
    <ClientAccounts />
  </Layout>
);

export default ClientAccountsPage;
