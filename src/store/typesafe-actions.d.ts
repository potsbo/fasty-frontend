import { StateType, ActionType } from "typesafe-actions";

declare module "typesafe-actions" {
  export type Store = StateType<typeof import("./configureStore")>;

  export type RootState = StateType<typeof import("./reducer")>;

  export type RootAction = ActionType<typeof import("./actions")>;

  interface Types {
    RootAction: RootAction;
  }
}
