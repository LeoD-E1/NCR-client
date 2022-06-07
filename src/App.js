import Clients from "./pages/Clients/Clients";
import Client from "./pages/Client";
import { Switch, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Clients} />
        <Route path="/:clientNumber/accounts" component={Client} />
        <Route path="/:clientNumber/accounts/:account" component={Client} />
      </Switch>
    </div>
  );
}

export default App;
