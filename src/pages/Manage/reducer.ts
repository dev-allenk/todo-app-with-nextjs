import {
  TodoItem,
  Action,
  GetTodos,
  AddTodo,
  DeleteTodo,
  UpdateStatus,
} from "@types";
import { Reducer } from "react";
import { setLocalStorage } from "src/utils";

const random = () => (200 + Math.random() * 10000) | 0;

const reducer: Reducer<TodoItem[], Action> = (state, action) => {
  if (isGetTodos(action)) {
    setLocalStorage("todos", action.payload);
    return [...state, ...action.payload];
  }
  if (isAddTodo(action)) {
    const newTodos = [
      { ...action.payload, id: random(), completed: false },
      ...state,
    ];
    setLocalStorage("todos", newTodos);
    return newTodos;
  }
  if (isDeleteTodo(action)) {
    const newTodos = state.filter((item) => item.id !== Number(action.payload));
    setLocalStorage("todos", newTodos);
    return newTodos;
  }
  if (isUpdateStatus(action)) {
    const newTodos = state.map((item) =>
      item.id === Number(action.payload)
        ? { ...item, completed: !item.completed }
        : item
    );
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
function isDeleteTodo(action: Action): action is DeleteTodo {
  return action.type === "deleteTodo";
}
function isUpdateStatus(action: Action): action is UpdateStatus {
  return action.type === "updateStatus";
}
export default reducer;
