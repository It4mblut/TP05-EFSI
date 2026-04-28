import axios from 'axios'

const API_KEY = "1483676";
const BASE_URL = "http://www.omdbapi.com/";

 async function buscarPeli (titulo) {
  const respuesta = await axios.get(BASE_URL, {
    params: {
      s: titulo,
      apikey: API_KEY,
    },
  });
  return respuesta.data;
}


async function detallesPeli (imdbID) {
  const respuesta = await axios.get(BASE_URL, {
    params: {
      i: imdbID,
      apikey: API_KEY,
    },
  });
  return respuesta.data;
}

export {buscarPeli, detallesPeli}