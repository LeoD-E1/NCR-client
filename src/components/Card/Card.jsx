import React from "react";
import "./card.styles.css";

const Card = (props) => {
  const { info, type } = props;

  switch (type) {
    case "account":
      return (
        <div className="container-card">
          <div className="card-head">
            <div>
              <div className="account-name">{info.name.toUpperCase()}</div>
              <div className="account-type">{info.type}</div>
            </div>
            <div className="account-balance"> ${info.balance}</div>
          </div>
          <div className="card-body">
            <span>client N. {info.clientNumber} </span>
            <span>account N. {info.accountNumber}</span>
          </div>
        </div>
      );

    case "client":
      return (
        <div className="container-card-client">
          <div className="card-head">
            <div>
              <div className="account-name">{info.name.toUpperCase()}</div>
            </div>
          </div>
          <div className="card-body">
            <span>client N. {info.clientNumber} </span>
          </div>
        </div>
      );

    case "transfer":
      return (
        <div className="container-card">
          <div className="card-head">
            <div>
              <div className="account-name">
                From account: {info.from} {""}
                To account: {info.to}
              </div>
            </div>
            <div className="account-balance"> ${info.amount}</div>
          </div>
          <div className="card-body">
            <span>client N. {info.clientNumber} </span>
            <span className="account-type">{info.date.toLocaleString()} </span>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default Card;
