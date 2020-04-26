export interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface GetTodos {
  type: "getTodos";
  payload: TodoItem[];
}

export interface AddTodo {
  type: "addTodo";
  payload: TodoItem;
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
