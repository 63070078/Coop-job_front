import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://coopjob-backend-2nu3pqzog-63070078s-projects.vercel.app/',
})

export default instance
