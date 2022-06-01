import {
  BrowserRouter as Router,
  // Redirect,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Shop from "./components/Shop";
import Bakery from "./components/Bakery";

function App() {
  return (
    <div id="app">
      <h1>Donut Shop</h1>
      <Router>
        <NavBar />
        {/* {user !== "" ? <h3>Current User: {user}</h3> : ""} */}

        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>

          <Route path="/bakery">
            <Bakery />
          </Route>

          {/* <Redirect to="/shop"></Redirect> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
