export interface ITodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface GetTodos {
  type: "getTodos";
  payload: ITodoItem[];
}

export interface AddTodo {
  type: "addTodo";
  payload: ITodoItem;
}

export interface DeleteTodo {
  type: "deleteTodo";
  payload: string;
}

export interface UpdateStatus {
  type: "updateStatus";
  payload: string;
}

export type Action = GetTodos | AddTodo | DeleteTodo | UpdateStatus;
