import Vue from 'vue'

// axios
import axios from 'axios'

const BASE_URL = process.env.VUE_APP_API_URL;

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  // baseURL: 'https://some-domain.com/api/',
  baseURL: BASE_URL,
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
})

Vue.prototype.$http = axiosIns

export default axiosIns
