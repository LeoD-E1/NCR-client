import React, { useState, useEffect } from "react";
import apiCaller from "../../utils/apiCaller";
import Card from "../Card/Card";

const Transfers = ({ clientNumber }) => {
  const [transfers, setTransfers] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false);

  const getTransfers = async () => {
    setFetching(true);
    try {
      const transfers = await apiCaller(`/transfer/${clientNumber}`);
      setTransfers(transfers);
    } catch (error) {
      setError(true);
    }
    setFetching(false);
  };

  useEffect(() => {
    getTransfers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <header>
        <h1>Transfers</h1>
      </header>
      <section>
        {fetching ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : transfers.length ? (
          transfers
            .slice(transfers.length - 5)
            .map((transfer) => (
              <Card info={transfer} type="transfer" key={transfer._id} />
            ))
        ) : (
          <h3 className="no-account-title">No hay transferencias</h3>
        )}
      </section>
    </div>
  );
};

export default Transfers;
