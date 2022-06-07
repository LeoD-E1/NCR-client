import React, { useState, useEffect } from "react";
import apiCaller from "../../utils/apiCaller";
import Card from "../../components/Card/Card";
import "./clients.styles.css";

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
    <div className="container-clients">
      <section className="cards-clients">
        {isfetching ? (
          <h1>Loading...</h1>
        ) : iserror ? (
          <h1>Error</h1>
        ) : clients.length ? (
          clients.map((client) => (
            <a
              href={`/account/${client.clientNumber}`}
              key={client.clientNumber}
            >
              <Card info={client} />
            </a>
          ))
        ) : (
          <h3 className="no-clients-title">No hay clientes</h3>
        )}
      </section>
    </div>
  );
};

export default Clients;
