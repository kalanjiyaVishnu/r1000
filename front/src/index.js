import ReactDOM from "react-dom";
import App from "./App";

import "./styles/index.css";
import { FirebaseContext } from "./context/firebaseContext";
import Fire from "./fire";
ReactDOM.render(
  <FirebaseContext.Provider value={{ Fire, test: "hello" }}>
    <App />
  </FirebaseContext.Provider>,

  document.getElementById("root")
);
