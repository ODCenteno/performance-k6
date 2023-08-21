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

// Ejecutamos un contador para 2 endpoints
export default function() {
  let productsRes = http.get(`${baseURL}/api/v1/products`);
  productsCounter.add(1);

  let categoriesRes = http.get(`${baseURL}/api/v1/categories`);
  categoriesCounter.add(1);
} 