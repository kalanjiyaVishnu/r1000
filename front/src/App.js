import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./component/Error";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/register-page" component={Register} />
        <Route exact path="/login-page" component={Login} />

        <Route
          path="/"
          exact
          render={() => (
            <>
              <Navbar />
              <Home />
            </>
          )}
        />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}
