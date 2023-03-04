import axios from 'axios'

const instance = axios.create({
  crossdomain:true,
  baseURL: 'http://localhost:5000'
})

export default instance
