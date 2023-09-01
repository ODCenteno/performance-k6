
import { check } from 'k6';
import http from 'k6/http';

import baseUrl from '../baseUrl.js';

export const options = {
  vus: 10,
  duration: '16s',
  threshold: {
    http_req_failed: ["rate<0.1"],
    http_req_duration: [{
      threshold: "p(95)<200",
      // Finalizar el test cuando falle
      abortonFail: true,
      // Cuánto tiempo esperará para finalizar el proceso
      delayAbortEval: '10s'
    }]
  },
};

export default function() {
  const response = http.get(`${baseUrl}/products/13`);

  check(response, {
    // (r) simboliza cada una de las iteraciones
    'statusCode is 200': (r) => r.status === 200,
    'transaction is below 500ms': (r) => r.timings.duration < 500,

  })
}

