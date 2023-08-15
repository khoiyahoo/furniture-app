import axios from 'axios'

export const apiGetAllProduct = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://192.168.1.219:5000/api/v1/products/all',
      })
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
