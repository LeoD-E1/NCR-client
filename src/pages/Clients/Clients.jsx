import React, { useState, useEffect } from "react";
import apiCaller from "../../utils/apiCaller";
import Card from "../../components/Card/Card";
import "./clients.styles.css";

const Clients = () => {
  const [clients, setClients] = useState([]);

  const getAccounts = async () => {
    const clients = await apiCaller("/client/");
    setClients(clients);
  };

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <div className="container-clients">
      <section className="cards-clients">
        {clients.map((client) => (
          <article>
            <a href={`${client.clientNumber}/accounts`}>
              <Card info={client} />
            </a>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Clients;
