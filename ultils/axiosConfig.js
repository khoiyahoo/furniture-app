import axios from 'axios'

const api = axios.create({
  baseURL: `http://localhost:8080/`,
  // baseURL: `https://travel-backend-new.herokuapp.com/`,
})

api.interceptors.request.use((config) => {
  return config
})

export default api
