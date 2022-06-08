import React from "react";
import "./layout.styles.css";

const Layout = ({ children }) => {
  return (
    <div className="container-layout">
      <header>
        <h1>NCR-CLIENT</h1>
      </header>

      <main className="principal">{children}</main>

      <footer>
        <p>all rights reserved &copy; {new Date().getFullYear()} | </p>
      </footer>
    </div>
  );
};

export default Layout;
