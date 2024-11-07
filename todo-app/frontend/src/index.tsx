import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promise from "redux-promise";
// @ts-ignore
import multi from "redux-multi";
import { thunk } from "redux-thunk";

import App from "./App";
import "./index.css";
import rootReducer from "./store/reducers";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const store = applyMiddleware(thunk, multi, promise)(createStore)(rootReducer);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
