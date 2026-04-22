import axios from 'axios'

const api = axios.creat({
    baseURL: 'https://imdb.iamidiotareyoutoo.com/search?q=&tt=&lsn=1&v=1'
})

export default api

//https://imdb.iamidiotareyoutoo.com/docs/index.html#GET/search