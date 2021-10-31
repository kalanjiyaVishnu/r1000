import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./component/Error";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import * as ROUTES from "./constansts/routes";
import CreatePro from "./component/CreatePro";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={["/", ROUTES.CREATE_NEW_PROJECT]}
          render={() => (
            <main className="h-screen">
              <div className="container md:max-w-screen-2xl w-5/6 mx-auto">
                <Navbar />
                <Route path="/" exact render={() => <Home />} />

                <Route
                  exact
                  path={ROUTES.CREATE_NEW_PROJECT}
                  component={CreatePro}
                />
                <Route path="*" component={Error} />
              </div>
            </main>
          )}
        />
        <Route exact path={ROUTES.REGISTER} component={Register} />
        <Route exact path={ROUTES.LOGIN} component={Login} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}
