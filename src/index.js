import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import postReducer from "./store/reducers/postReducer";
import { Provider } from "react-redux";

const store = createStore(postReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
