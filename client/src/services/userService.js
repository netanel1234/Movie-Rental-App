import http from "./httpService";
import consfig from "../config.json";

const apiEndpoint = consfig.apiUrl + "/users";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
