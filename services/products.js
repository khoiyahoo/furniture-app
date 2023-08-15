import axios from 'axios'
const BASE_URL = 'http://192.168.1.7:5000'
export const apiGetAllProduct = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'get',
        url: `${BASE_URL}/api/v1/products/all`,
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })

export const apiSearchProduct = (searchTerm) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'get',
        url: `${BASE_URL}/api/v1/products/search/${searchTerm}`,
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
