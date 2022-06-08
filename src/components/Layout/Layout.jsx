import React from "react";
import "./layout.styles.css";

const Layout = ({ children }) => {
  return (
    <div className="container-layout">
      <header className="header-layout">
        <h1>NCR-CLIENT</h1>
      </header>

      <main className="principal">{children}</main>

      <footer>
        <p>
          &copy;Leoda technologies | all rights reserved{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Layout;
