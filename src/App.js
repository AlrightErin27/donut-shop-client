import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Shop from "./components/Shop";
import Bakery from "./components/Bakery";

function App() {
  return (
    <div id="app">
      <center>
        <h1 className="title">Glaze of Glory</h1>
      </center>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/bakery">
            <Bakery />
          </Route>
          <Redirect to="/shop"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
