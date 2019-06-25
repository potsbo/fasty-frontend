import { createStandardAction } from "typesafe-actions";
import { Todo } from "MyModels";

export const addTodo = createStandardAction("ADD_TODO").map(
  ({ title }: { title: string }): { payload: Todo } => ({
    payload: {
      title,
      id: "1111"
    }
  })
);

export const removeTodo = createStandardAction("REMOVE_TOOD")<string>();
