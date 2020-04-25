import { TodoItem, Action, GetTodo, AddTodo } from "@types";
import { Reducer } from "react";

const reducer: Reducer<TodoItem[], Action> = (state, action) => {
  if (isGetTodo(action)) {
    return [...state, ...action.payload];
  }
  if (isAddTodo(action)) {
    const userId = 1;
    const id = (Math.random() * 10000) | 0;
    const newTodo = {
      userId,
      id,
      title: action.payload,
      completed: false,
    };
    return [newTodo, ...state];
  }
  return state;
};

function isGetTodo(action: Action): action is GetTodo {
  return action.type === "getTodo";
}
function isAddTodo(action: Action): action is AddTodo {
  return action.type === "addTodo";
}
export default reducer;
