import http from "k6/http";

const baseURL = 'https://fakeapi.platzi.com/';

// Definición de la cantidad de virtual users y duración del test
export const options = {
  vus: 10,
  duration: '10s'
}

export default function() {
  let response = http.get(`${baseURL}/api/v1/products`);
}

// corremos la prueba en la terminal: k6 run stages.test.js