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
  const { loading, request } = useFetch({
    onRequest: (action) => onRequest(action),
    loadStatus: true,
  });

  const onRequest = ({ type, payload }: Action) => {
    if (type === "deleteTodo") {
      return api.deleteTodo(payload);
    }
    return api.updateStatus(payload);
  };

  const deleteTodo = async ({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const action: Action = {
      type: "deleteTodo",
      payload: currentTarget.dataset.id!,
    };
    await request(action);
    dispatch(action);
  };

  const updateStatus = async ({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const action: Action = {
      type: "updateStatus",
      payload: currentTarget.dataset.id!,
    };
    await request(action);
    dispatch(action);
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
              <S.Span
                data-id={item.id}
                onClick={updateStatus}
                completed={item.completed}
              >
                {item.title}
              </S.Span>
              <S.CloseButton data-id={item.id} onClick={deleteTodo} />
            </S.Li>
          </>
        ))}
      </S.ListWrapper>
    </>
  );
}

export default TodoLists;
