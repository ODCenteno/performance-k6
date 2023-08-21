import http from "k6/http";
import baseURL from "../baseUrl.js";
import { Counter, Gauge } from "k6/metrics";

export const options = {
  vus: 10,
  duration: '20s'
}

const waitingTime = new Gauge('waiting_time');

export default function() {
  let productsRes = http.get(`${baseURL}/api/v1/products`);
  
  waitingTime.add(productsRes.timings.waiting);
  console.log(waitingTime.name);
} 