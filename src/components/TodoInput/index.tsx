import React, { useState } from "react";
import { Action } from "@types";
import S from "./styles";
import api from "src/api";
import useFetch from "src/hooks/useFetch";

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
  });

  return (
    <>
      <S.Input value={value} onChange={onChange}></S.Input>
      <S.Button type="button" onClick={request}>
        add
      </S.Button>
    </>
  );
}

export default TodoInput;
