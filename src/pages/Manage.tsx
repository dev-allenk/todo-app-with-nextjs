import Layout from "../components/Layout";
import TodoInput from "../components/TodoInput";
import TodoLists from "../components/TodoLists";

const data = [
  { id: 1, title: "1" },
  { id: 2, title: "2" },
  { id: 3, title: "3" },
];

export default function Manage() {
  return (
    <Layout>
      <TodoInput />
      {data && <TodoLists todos={data!} />}
    </Layout>
  );
}
