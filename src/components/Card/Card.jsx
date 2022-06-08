import React from "react";
import "./card.styles.css";

const Card = (props) => {
  const { info } = props;
  return (
    <div className="container-card">
      <div className="card-head">
        <div>
          <div className="account-name">{info.name.toUpperCase()}</div>
          {!info.type ? null : <div className="account-type">{info.type}</div>}
        </div>
        {!info.balance ? null : (
          <div className="account-balance"> ${info.balance}</div>
        )}
      </div>
      <div className="card-body">
        <span>client N. {info.clientNumber} </span>
        {!info.accountNumber ? null : (
          <span>account N. {info.accountNumber}</span>
        )}
      </div>
    </div>
  );
};

export default Card;
