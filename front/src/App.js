import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./component/Error";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import * as ROUTES from "./constansts/routes";
import CreatePro from "./component/CreatePro";
import bgimg from "../src/images/background-image-for-website-1.jpg";
export default function App() {
  return (
    <Router>
      <Switch>
        {/* <img
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover user-none opacity-60 back"
          src={bgimg}
          alt=""
        /> */}
        <Route
          
          path="/"
          render={() => (
            <main className="h-screen bg-img">
              <div className="container md:max-w-screen-2xl w-5/6 mx-auto z-50">
                <Navbar />
                <Route path="/" exact render={() => <Home />} />

                <Route
                  exact
                  path={ROUTES.CREATE_NEW_PROJECT}
                  component={CreatePro}
                />
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
