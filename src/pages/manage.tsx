import React, { useReducer, useEffect } from "react";
import Layout from "../components/Layout";
import TodoInput from "../components/TodoInput";
import TodoLists from "../components/TodoLists";
import useFetch from "../hooks/useFetch";
import api from "../api";
import reducer from "../reducers";
import { getLocalStorage } from "src/utils";
import { ITodoItem } from "@types";
import Loader from "../components/Loader";

export default function Manage() {
  const [data, dispatch] = useReducer(reducer, []);

  const getTodos = (data: ITodoItem[]) => {
    dispatch({ type: "getTodos", payload: data });
  };

  const { loading, request } = useFetch({
    onRequest: api.getTodos,
    onSuccess: getTodos,
    loadStatus: true,
  });

  useEffect(() => {
    const data = getLocalStorage("todos");
    data ? getTodos(data) : request();
  }, []);

  return (
    <Layout>
      <TodoInput dispatch={dispatch} />
      {loading ? <Loader /> : <TodoLists todos={data} dispatch={dispatch} />}
    </Layout>
  );
}
