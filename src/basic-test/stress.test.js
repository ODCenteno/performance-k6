import http from "k6/http";
import { sleep } from "k6";
import baseURL from "../baseUrl.js";


export const options = {
  stages: [{
    duration: '1m',
    target: 200
  },
  {
    duration: '2m',
    target: 200
  },
  {
    duration: '2m',
    target: 400
  }
]};

export default function() {
  let response = http.get(`${baseURL}/api/v1/products`);
  sleep(1); 
}