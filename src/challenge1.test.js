// En los primeros 60s -> 10 vus, mantener 180s
// En la última etapa, reducir a 0
import http from "k6/http";

const baseURL = 'https://fakeapi.platzi.com/';

export const options = {
  stages: [{
    duration: '60s',
    target: 10
  },
  {
    duration: '120s',
    target: 10
  }, 
  {
    duration: '60s',
    target: 0
  }
]
};

export default function() {
  let response = http.get(`${baseURL}/api/v1/products`);
}