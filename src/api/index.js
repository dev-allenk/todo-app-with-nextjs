const API_ENDPOINT = "https://jsonplaceholder.typicode.com";

const GET = "GET";
const POST = "POST";
const PUT = "PUT";
const DELETE = "DELETE";

const BODY = (value) => ({
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(value),
});

const request = async (method, URI, options) => {
  return await fetch(`${API_ENDPOINT}${URI}`, { method, ...options });
};

const todoApi = {
  getTodos() {
    return request(GET, "/todos");
  },
  addTodo(newTodo) {
    return request(POST, "/todos", BODY(newTodo));
  },
  deleteTodo(id) {
    return request(DELETE, `/todos/${id}`);
  },
  updateStatus(id, status) {
    return request(PUT, `/todos/${id}`, BODY({ completed: !status }));
  },
};

export default { ...todoApi };
