import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store } from "@common/store";
import { App } from "./App";
import "./style/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
