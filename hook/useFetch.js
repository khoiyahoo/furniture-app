import { useState, useEffect } from 'react'
import axios from 'axios'
const useFetch = async () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const fetchData = async () => {
    setIsLoading(true)
    axios
      .get(`http://192.168.1.219:3001/api/v1/products/all`, {
        'Content-Type': 'multipart/form-data',
      })
      .then((res) => {
        setData(res.data.response)
        // console.log("12333");
      })
      .catch((error) => console.log(error, 'loi roi'))
  }
  useEffect(() => {
    fetchData()
  }, [])
  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }
  // console.log(data, '----')
  return { data, isLoading, error, refetch }
}
export default useFetch
