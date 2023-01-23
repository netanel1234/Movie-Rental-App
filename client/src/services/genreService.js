import http from "./httpService";
import consfig from "../config.json";

export function getGenres() {
  return http.get(consfig.apiUrl + "/genres");
}
