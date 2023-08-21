// Trend guarda:
// Valor máximo y mínimo, promedio, media y percentiles

import http from "k6/http";
import baseURL from "../baseUrl.js";
import { Trend } from "k6/metrics";

export const options = {
  vus: 10,
  duration: '10s'
};

const usersTrend = new Trend('users_time');
const categoriesTrend = new Trend('categories_time');

export default function() {
  const reqUsers = http.get(`${baseURL}/users`);
  usersTrend.add(reqUsers.timings.duration);
  
  const reqCategories = http.get(`${baseURL}/categories`);
  categoriesTrend.add(reqCategories.timings.duration);
}