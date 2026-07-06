import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const createUser = (data) =>
  API.post("/users", data);

export const getUsers = () =>
  API.get("/users");