import axios from 'axios'

const ajax = axios.create({
  baseURL:'http://localhost:3000'  //服务器基地址
})
export default ajax