import React, { useState } from "react";

const TransferForm = (props) => {
  const { accounts } = props;

  const [query, setQuery] = useState({
    clientNumber: accounts[0].clientNumber,
    fromAccount: null,
    toAccount: null,
    amount: null,
  });

  const [queryResponse, setQueryResponse] = useState({
    status: null,
    message: "",
  });

  const handleChange = (evt) => {
    setQuery({ ...query, [evt.target.name]: parseInt(evt.target.value) });
  };

  const generateTransfer = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/transfer/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(query),
        }
      );
      const request = await response.json();
      return request;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const response = await generateTransfer();
    if (response.status === 200) {
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
    setQueryResponse({ status: response.status, message: response.message });
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange} name="fromAccount">
          <option value="">From</option>
          {accounts.map((account) => (
            <option key={account.accountNumber} value={account.accountNumber}>
              {account.name}
            </option>
          ))}
        </select>{" "}
        <br />
        <select onChange={handleChange} name="toAccount">
          <option value="">To</option>
          {accounts.map((account) => (
            <option key={account.accountNumber} value={account.accountNumber}>
              {account.name}
            </option>
          ))}
        </select>
        <div>
          <input
            type="number"
            name="amount"
            onChange={handleChange}
            placeholder="Amount to transfer"
          />
        </div>
        <button className="modal-button" type="submit">
          Transfer
        </button>
      </form>
      {!queryResponse.status ? null : (
        <section>
          <h4
            style={{
              color: queryResponse.status === 200 ? "green" : "red",
            }}
          >
            {queryResponse.message}
          </h4>
        </section>
      )}
    </main>
  );
};

export default TransferForm;
