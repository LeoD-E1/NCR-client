import React, { useState, useEffect } from "react";
import apiCaller from "../../utils/apiCaller";
import Card from "../../components/Card/Card";
import "./clients.styles.css";
import Layout from "../../components/Layout/Layout";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [isfetching, setFetching] = useState(false);
  const [iserror, setError] = useState(false);

  const getAccounts = async () => {
    setFetching(true);
    try {
      const clients = await apiCaller("/client/");
      setClients(clients);
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
        <h1>Clients</h1>
      </header>
      <div className="container-clients">
        <section className="cards-clients">
          {isfetching ? (
            <h1>Loading...</h1>
          ) : iserror ? (
            <h1>Error</h1>
          ) : clients.length ? (
            clients.map((client) => (
              <a
                href={`/clients/${client.clientNumber}/accounts`}
                key={client.clientNumber}
              >
                <Card info={client} type="client" />
              </a>
            ))
          ) : (
            <h3 className="no-clients-title">No hay clientes</h3>
          )}
        </section>
      </div>
    </div>
  );
};

const ClientsPage = () => (
  <Layout>
    <Clients />
  </Layout>
);

export default ClientsPage;
