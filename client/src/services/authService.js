import http from "./httpService";
import consfig from "../config.json";

const apiEndpoint = consfig.apiUrl + "/auth";

export function login(email, password) {
  return http.post(apiEndpoint, { email, password });
}
