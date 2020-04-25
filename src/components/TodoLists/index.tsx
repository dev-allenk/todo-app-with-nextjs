import React, { useState } from "react";
import S from "./styles";
import { TodoItem, Action } from "@types";
import useFetch from "src/hooks/useFetch";
import api from "src/api";
import Modal from "../Modal";
import Loader from "../Loader";

interface TodoListsProps {
  todos: TodoItem[];
  dispatch: React.Dispatch<Action>;
}

function TodoLists({ todos = [], dispatch }: TodoListsProps) {
  const [todoId, setTodoId] = useState("");
  const { loading } = useFetch({
    onRequest: () => api.deleteTodo(todoId),
    onSuccess: () => deleteTodo(todoId),
    loadStatus: true,
    watch: todoId,
  });

  const deleteTodo = (todoId: string) => {
    dispatch({ type: "deleteTodo", payload: todoId });
    setTodoId("");
  };

  const onClick = ({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setTodoId(currentTarget.dataset.id!);
  };

  return (
    <>
      {loading && (
        <Modal>
          <Loader />
        </Modal>
      )}
      <S.ListWrapper>
        {todos.map((item) => (
          <>
            <S.Li key={item.id}>
              <S.Span>{item.title}</S.Span>
              <S.CloseButton data-id={item.id} onClick={onClick} />
            </S.Li>
          </>
        ))}
      </S.ListWrapper>
    </>
  );
}

export default TodoLists;
