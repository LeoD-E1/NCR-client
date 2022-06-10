import Clients from "./pages/Clients/Clients";
import ClientAccountsPage from "./pages/Client/ClientAccounts";
import { Switch, Route, Redirect } from "wouter";

const Home = () => {
  return <Redirect to="/clients" />;
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/clients" component={Clients} />
        <Route
          path="/clients/:clientNumber/accounts"
          component={ClientAccountsPage}
        />
      </Switch>
    </div>
  );
}

export default App;
