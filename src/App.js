import Clients from "./pages/Clients/Clients";
import ClientAccounts from "./pages/Client/ClientAccounts";
import { Switch, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Clients} />
        <Route path="/account/:clientNumber" component={ClientAccounts} />
        <Route
          path="/:clientNumber/accounts/:account"
          component={ClientAccounts}
        />
      </Switch>
    </div>
  );
}

export default App;
