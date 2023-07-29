import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://betahardwareapi.azurewebsites.net',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getProducts() {
    return apiClient.get('/products')
  },
  getProduct(id) {
    return apiClient.get('/product/' + id)
  },
}
