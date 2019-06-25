import { createStore, Store, compose } from "redux";

import { rootReducer } from "./reducer";

export const middlewares = [];

const composeEnhancers =
  process.env.REACT_APP_NODE_ENV !== "production" &&
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const initialState = {};
const enhancer = composeEnhancers();
export const store = createStore(rootReducer, initialState, enhancer);
