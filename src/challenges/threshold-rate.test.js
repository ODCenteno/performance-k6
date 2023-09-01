import http from "k6/http";
import { Rate } from "k6/metrics";
import baseURL from "../baseUrl.js";
import { check, sleep } from "k6";

// validar si el 35% de las peticiones fallan, terminar el test
// evaluar a los 10s y al final del test

export const options = {
  vus: 10,
  duration: '20s',
  threshold: {
    http_req_failed: ["rate<0.35"],
    http_req_failed: [{
      threshold: "rate<0.35",
      // Finalizar el test cuando falle
      abortonFail: true,
      // Cuánto tiempo esperará para finalizar el proceso
      delayAbortEval: '10s'
    }]
  },
};

const myRate = new Rate('req_products');

let randInt = (max, min) => Math.floor((Math.random() * (max - min + 1)) + min);

export default function() {
  const req = http.get(`${baseURL}/products/${randInt(1, 300)}`);
  if (req.status === 400) {
    myRate.add(0);
  } else {
    myRate.add(1)
  }
  sleep(1);
} 
