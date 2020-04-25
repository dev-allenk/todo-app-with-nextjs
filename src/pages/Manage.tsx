import Layout from "../components/Layout";
import TodoInput from "../components/TodoInput";
import TodoLists from "../components/TodoLists";
import useFetch from "../hooks/useFetch";
import api from "../api";

export default function Manage() {
  const { data } = useFetch({
    onRequest: api.getTodos,
    autoFetch: true,
  });
  return (
    <Layout>
      <TodoInput />
      {data && <TodoLists todos={data!} />}
    </Layout>
  );
}
