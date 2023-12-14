import { createStore, applyMiddleware, compose } from "redux";

import { thunk } from "redux-thunk";

import reducer from "./reducer";

const composeEnHancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnHancer(applyMiddleware(thunk)) // esta línea es para poder hacer peticiones a un server
);
export default store;
