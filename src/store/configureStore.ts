import { applyMiddleware, createStore, Store, compose } from "redux";
import reducer, { RootState, initialState } from "./modules";

export function configureStore(): Store<RootState> {
  const middlewares: any = [];
  const composeEnhancers =
    process.env.REACT_APP_NODE_ENV !== "production" &&
    typeof window === "object" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;
  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  return store;
}
