import { createStore, Store } from "redux";

import { rootReducer, RootState } from "./modules";

export function configureStore(): Store<RootState> {
  const store = createStore(rootReducer);
  return store;
}
