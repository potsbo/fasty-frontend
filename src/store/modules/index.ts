import { combineEpics } from "redux-observable";
import { combineReducers } from "redux";

export const rootEpic = combineEpics(pingEpic, fetchUserEpic);

export const rootReducer = combineReducers({
  ping,
  users
});
