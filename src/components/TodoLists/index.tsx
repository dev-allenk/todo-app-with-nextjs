import React, { useRef } from "react";
import S from "./styles";
import { ITodoItem, Action } from "@types";
import useFetch from "src/hooks/useFetch";
import api from "src/api";
import Modal from "../Modal";
import Loader from "../Loader";
import TodoItem from "../TodoItem";

interface TodoListsProps {
  todos: ITodoItem[];
  dispatch: React.Dispatch<Action>;
}

function TodoLists({ todos = [], dispatch }: TodoListsProps) {
  const wrapperRef = useRef(null);
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
      <S.ListWrapper ref={wrapperRef}>
        {todos.map((item) => (
          <>
            <TodoItem
              forwardRef={wrapperRef}
              key={item.id}
              item={item}
              onUpdate={updateStatus}
              onDelete={deleteTodo}
            />
          </>
        ))}
      </S.ListWrapper>
    </>
  );
}

export default TodoLists;
