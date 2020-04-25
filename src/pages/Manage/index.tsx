import React, { useReducer } from "react";
import Layout from "../../components/Layout";
import TodoInput from "../../components/TodoInput";
import TodoLists from "../../components/TodoLists";
import useFetch from "../../hooks/useFetch";
import api from "../../api";
import reducer from "./reducer";

export default function Manage() {
  const [data, dispatch] = useReducer(reducer, []);
  const { loading } = useFetch({
    onRequest: api.getTodos,
    onSuccess: (data) => dispatch({ type: "getTodo", payload: data }),
    autoFetch: true,
  });
  return (
    <Layout>
      <TodoInput dispatch={dispatch} />
      {loading ? <div>loading...</div> : <TodoLists todos={data} />}
    </Layout>
  );
}
