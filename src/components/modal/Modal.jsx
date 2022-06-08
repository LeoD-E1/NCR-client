import React from "react";
import "./modal.styles.css";

const Modal = (props) => {
  const { info, closeModal } = props;

  const handleChange = () => {};

  return (
    <div className="modal-container">
      <div className="modal-card">
        <section className="modal-header">
          <h1>Modal</h1>
          <button className="modal-button" onClick={() => closeModal(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
            </svg>
          </button>
        </section>
        <section className="modal-body">
          <select id="from-account-select" onChange={handleChange}>
            <option value="">From account</option>
            {info.map((account) => (
              <option key={account.accountNumber} value={account.accountNumber}>
                {account.name}
              </option>
            ))}
          </select>
          <hr />
          <select id="from-account-select" onChange={handleChange}>
            <option value="">To account</option>
            {info.map((account) => (
              <option key={account.accountNumber} value={account.accountNumber}>
                {account.name}
              </option>
            ))}
          </select>
        </section>
      </div>
    </div>
  );
};

export default Modal;
