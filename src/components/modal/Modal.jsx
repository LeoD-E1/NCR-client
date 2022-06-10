import React from "react";
import "./modal.styles.css";

const Modal = (props) => {
  const { closeModal, title, children } = props;
  return (
    <div className="modal-container">
      <div className="modal-card">
        <section className="modal-header">
          <h1>{title}</h1>
          <button className="modal-button" onClick={() => closeModal(false)}>
            X
          </button>
        </section>
        <section className="modal-body">{children}</section>
      </div>
    </div>
  );
};

export default Modal;
