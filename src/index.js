import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-o4il6kocsgteiemo.us.auth0.com"
    clientId="yrgPSe9H9lp03HUxnYODYHeqkkbeG1iM"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);
