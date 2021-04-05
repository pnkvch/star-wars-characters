import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers/index";
import rootSaga from "./sagas";
import { Provider } from "react-redux";

const sagaMiddleware = createSagaMiddleware();

let storage = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storage}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
