import React, { useReducer, useEffect } from "react";
import Layout from "../../components/Layout";
import TodoInput from "../../components/TodoInput";
import TodoLists from "../../components/TodoLists";
import useFetch from "../../hooks/useFetch";
import api from "../../api";
import reducer from "./reducer";
import { getLocalStorage } from "src/utils";
import { TodoItem } from "@types";

export default function Manage() {
  const [data, dispatch] = useReducer(reducer, []);

  const getTodos = (data: TodoItem[]) => {
    dispatch({ type: "getTodos", payload: data });
  };

  const { loading, request } = useFetch({
    onRequest: api.getTodos,
    onSuccess: getTodos,
  });

  useEffect(() => {
    const data = getLocalStorage("todos");
    data ? getTodos(data) : request();
  }, []);

  return (
    <Layout>
      <TodoInput dispatch={dispatch} />
      {loading ? <div>loading...</div> : <TodoLists todos={data} />}
    </Layout>
  );
}