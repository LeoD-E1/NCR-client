import React from "react";
import "./modal.styles.css";
import XButton from "../XButton";

const Modal = (props) => {
  const { closeModal, title, children } = props;
  return (
    <div className="modal-container">
      <div className="modal-card">
        <section className="modal-header">
          <h1>{title}</h1>
          <button className="modal-button" onClick={() => closeModal(false)}>
            <XButton />
          </button>
        </section>
        <section className="modal-body">{children}</section>
      </div>
    </div>
  );
};

export default Modal;
