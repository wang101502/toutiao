import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://ttapi.research.itcast.cn/mp/v1_0',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    },
})
export default instance;