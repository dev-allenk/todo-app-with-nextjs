export interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface GetTodo {
  type: "getTodo";
  payload: TodoItem[];
}

export interface AddTodo {
  type: "addTodo";
  payload: string;
}

export type Action = GetTodo | AddTodo;
