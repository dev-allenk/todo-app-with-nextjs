const API_ENDPOINT = "https://jsonplaceholder.typicode.com";

const GET = "GET";
const POST = "POST";
const PUT = "PUT";
const DELETE = "DELETE";

const request = async (method, URI, options) => {
  return await fetch(`${API_ENDPOINT}${URI}`, { method, ...options });
};

const todoApi = {
  getTodos() {
    return request(GET, "/todos");
  },
};

export default { ...todoApi };
