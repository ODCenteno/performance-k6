// Captura la información de la petición y guardarla en el text
import http from 'k6/http';

const baseURL = 'https://fakeapi.platzi.com/';

export default function() {
  let response = http.get(`${baseURL}/api/v1/products`);
}

// para correr un test, en la terminal: k6 run nombre_archivo