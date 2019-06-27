import { create } from "apisauce";

const api = create({
  baseURL: "https://my-json-server.typicode.com/codificar/oficina/proposals"
});

export default api;