import React, { useState } from "react";
import "./modal.styles.css";
import XButton from "../XButton";
import apiCaller from "../../utils/apiCaller";

const Modal = (props) => {
  const { info, closeModal } = props;
  const [query, setQuery] = useState({
    clientNumber: info[0].clientNumber,
    fromAccount: null,
    toAccount: null,
    amount: null,
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
    console.log(query);
    evt.preventDefault();
    const response = await generateTransfer();
    console.log(response);
  };

  return (
    <div className="modal-container">
      <div className="modal-card">
        <section className="modal-header">
          <h1>Modal</h1>
          <button className="modal-button" onClick={() => closeModal(false)}>
            <XButton />
          </button>
        </section>
        <section className="modal-body">
          <form onSubmit={handleSubmit}>
            <select
              id="from-account-select"
              onChange={handleChange}
              name="fromAccount"
            >
              <option value="">From account</option>
              {info.map((account) => (
                <option
                  key={account.accountNumber}
                  value={account.accountNumber}
                >
                  {account.name}
                </option>
              ))}
            </select>{" "}
            <br />
            <select
              id="to-account-select"
              onChange={handleChange}
              name="toAccount"
            >
              <option value="">To account</option>
              {info.map((account) => (
                <option
                  key={account.accountNumber}
                  value={account.accountNumber}
                >
                  {account.name}
                </option>
              ))}
            </select>
            <div>
              <input
                type="number"
                name="amount"
                id="amount"
                onChange={handleChange}
                placeholder="Amount to transfer"
              />
            </div>
            <button className="modal-button" type="submit">
              Transfer
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Modal;
