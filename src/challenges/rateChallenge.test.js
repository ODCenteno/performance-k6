import http from "k6/http";
import { Rate } from "k6/metrics";
import baseURL from "../baseUrl.js";
import { sleep } from "k6";

export const options = {
  vus: 10,
  duration: '10s'
};

const myRate = new Rate('req_products');

let randInt = () => Math.floor(Math.random() * 300);

export default function() {
  const req = http.get(`${baseURL}/products/${randInt()}`);
  if (req.status === 400) {
    myRate.add(0);
  } else {
    myRate.add(1)
  }
  sleep(1);
} 
