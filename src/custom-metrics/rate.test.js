import http from "k6/http";
import { Rate } from "k6/metrics";
import baseURL from "../baseUrl.js";


export const options = {
  vus: 10,
  duration: '20s'
};

const myRate = new Rate('called_products');

export default function() {
  // request a un producto que si existe
  const request = http.get(`${baseURL}/products/1`);
  myRate.add(1);

  // request a un producto que no existe
  const request404 = http.get(`${baseURL}/api/v1/products/300`);
  if (request404.status === 404) {
    myRate.add(0);
  }
}