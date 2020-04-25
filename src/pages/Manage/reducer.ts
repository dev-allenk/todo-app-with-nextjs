import { TodoItem, Action, GetTodos, AddTodo } from "@types";
import { Reducer } from "react";
import { setLocalStorage } from "src/utils";

const reducer: Reducer<TodoItem[], Action> = (state, action) => {
  if (isGetTodos(action)) {
    setLocalStorage("todos", action.payload);
    return [...state, ...action.payload];
  }
  if (isAddTodo(action)) {
    const newTodos = [{ ...action.payload, completed: false }, ...state];
    setLocalStorage("todos", newTodos);
    return newTodos;
  }
  return state;
};

function isGetTodos(action: Action): action is GetTodos {
  return action.type === "getTodos";
}
function isAddTodo(action: Action): action is AddTodo {
  return action.type === "addTodo";
}
export default reducer;
