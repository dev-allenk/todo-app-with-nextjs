import React, { useState } from "react";
import { Action } from "@types";
import S from "./styles";
import api from "src/api";
import useFetch from "src/hooks/useFetch";
import Modal from "../Modal";
import Loader from "../Loader";

const createNewTodo = (title: string) => {
  const userId = 1;
  return {
    userId,
    title,
  };
};

function TodoInput({ dispatch }: { dispatch: React.Dispatch<Action> }) {
  const [value, setValue] = useState("");

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target!.value);
  };

  const { loading, request } = useFetch({
    onRequest: () => api.addTodo(createNewTodo(value)),
    onSuccess: (payload) => dispatch({ type: "addTodo", payload }),
    loadStatus: true,
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    await request();
    setValue("");
  };

  return (
    <>
      <S.Form onSubmit={onSubmit}>
        <S.Input value={value} onChange={onChange}></S.Input>
        <S.Button type="submit">add</S.Button>
      </S.Form>
      {loading && (
        <Modal>
          <Loader />
        </Modal>
      )}
    </>
  );
}

export default TodoInput;
