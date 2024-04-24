import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://coop-job-back.onrender.com',
})

export default instance
