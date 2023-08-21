import http from "k6/http";
import baseURL from "../baseUrl.js";
import { Counter } from "k6/metrics";

export const options = {
  vus: 10,
  duration: '20s'
}

// definiendo una constante para los contadores 
const productsCounter = new Counter('called_products');
const categoriesCounter = new Counter('called_categories');
const usersCounter = new Counter('called_users');

// Ejecutamos un contador para 3 endpoints de forma aleatoria
export default function() {
  switch(Math.floor(Math.random() * 3)) {
    case 0:
      let productsRes = http.get(`${baseURL}/api/v1/products`);
      productsCounter.add(1);
      break
    case 1:
      let categoriesRes = http.get(`${baseURL}/api/v1/categories`);
      categoriesCounter.add(1);
      break
    case 2:
      let usersRes = http.get(`${baseURL}/api/v1/users`)
      usersCounter.add(1);
      break
    default:
      break
  }
} 