import React from "react";

interface TodoItem {
  id: number;
  title: string;
}

function TodoLists({ todos }: { todos: TodoItem[] }) {
  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default TodoLists;
