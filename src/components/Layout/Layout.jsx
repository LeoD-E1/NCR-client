import React from "react";
import "./layout.styles.css";

const Layout = ({ children }) => {
  return (
    <div className="container-layout">
      <div className="title">NCR-CLIENT</div>

      <main className="principal">{children}</main>

      <footer className="footer-layout">
        <p>
          &copy;Leoda technologies | all rights reserved{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Layout;
