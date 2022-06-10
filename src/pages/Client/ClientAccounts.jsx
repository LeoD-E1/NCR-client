import React, { useState } from "react";
import { useLocation } from "wouter";
import Card from "../../components/Card/Card";
import "../Clients/clients.styles.css";
import Layout from "../../components/Layout/Layout";
import Transfers from "../../components/transfers/Transfers";

import Modal from "../../components/modal/Modal";
import TransferForm from "../../components/transfers/TransferForm";
import useAccounts from "./hooks/useAccounts";

const ClientAccounts = () => {
  const [location] = useLocation();
  const clientNumber = location.split("/")[2];
  const { accounts, error, fetching } = useAccounts(clientNumber);

  const [limit, setLimit] = useState(true);
  const [modal, setModal] = useState(false);
  const limitAccounts = !limit ? accounts.length : 5;

  const showModal = () => {
    setModal(true);
  };

  return (
    <div>
      {!modal ? null : (
        <Modal closeModal={setModal} title={"Transfers"}>
          <TransferForm accounts={accounts} />
        </Modal>
      )}
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
        {!accounts.length ? null : (
          <button onClick={showModal}>Transfer</button>
        )}
      </header>
      <section className="cards-clients">
        {fetching ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : accounts.length ? (
          accounts
            .slice(0, limitAccounts)
            .map((account) => (
              <Card info={account} type="account" key={account._id} />
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
