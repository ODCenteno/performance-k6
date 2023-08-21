import { sleep } from "k6";
import http from "k6/http";

const baseURL = 'https://fakeapi.platzi.com/';

export const options = {
  stages: [
    {
      duration: '2m',
      target: 200
    },
    {
      duration: '3H30m',
      target: 200
    },
    {
      duration: '2m',
      target: 0
    }
  ]
}

export default function() {
  let response = http.get(`${baseURL}/api/v1/products`);
  sleep(1);
}