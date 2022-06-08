import Clients from "./pages/Clients/Clients";
import ClientAccountsPage from "./pages/Client/ClientAccounts";
import { Switch, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Clients} />
        <Route path="/account/:clientNumber" component={ClientAccountsPage} />
        <Route
          path="/:clientNumber/accounts/:account"
          component={ClientAccountsPage}
        />
      </Switch>
    </div>
  );
}

export default App;
