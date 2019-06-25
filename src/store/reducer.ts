import { combineReducers } from "redux";
import { createReducer } from "typesafe-actions";
import { Todo } from "MyModels";

import { addTodo } from "./actions";

export const todos = createReducer([
  {
    id: "0",
    title: "you can add new todos using the form or load saved snapshot...u can"
  }
] as Todo[]).handleAction(addTodo, (state, action) => [
  ...state,
  action.payload
]);

const todosReducer = combineReducers({
  todos
});

export type TodosState = ReturnType<typeof todosReducer>;

export const rootReducer = combineReducers({
  todos: todosReducer
});
