import * as React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware, Store, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import reducer from "./store/reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType;
} = createStore(reducer, composeEnhances(applyMiddleware(thunk)));

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
