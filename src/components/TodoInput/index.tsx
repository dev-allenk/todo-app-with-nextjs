import React, { useState } from "react";
import { Action } from "@types";
import S from "./styles";

function TodoInput({ dispatch }: { dispatch: React.Dispatch<Action> }) {
  const [value, setValue] = useState("");
  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setValue(target!.value);
  };
  const onClick = () => {
    dispatch({ type: "addTodo", payload: value });
  };
  return (
    <>
      <S.Input value={value} onChange={onChange}></S.Input>
      <S.Button type="button" onClick={onClick}>
        add
      </S.Button>
    </>
  );
}

export default TodoInput;
