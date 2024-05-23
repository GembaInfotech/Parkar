import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import AppContainer from "./AppContainer";


ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <AppContainer />
  </HashRouter>
);
