import React from "react";
import S from "./styles";

interface TodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function TodoLists({ todos }: { todos: TodoItem[] }) {
  return (
    <S.ListWrapper>
      {todos.map((item) => (
        <>
          <S.Li key={item.id}>
            <S.Span>{item.title}</S.Span>
            <S.CloseButton />
          </S.Li>
        </>
      ))}
    </S.ListWrapper>
  );
}

export default TodoLists;
