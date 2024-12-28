import axios from 'axios'

const apiClient = axios.create({
    baseURL:"https://localhost:5144/api"
});

apiClient.interceptors.request.use((config) =>{
    const token = localStorage.getItem('Token');
    if(token && !config.url.includes('/login') && !config.url.includes('/register')){
        config.headers.Authorization = `Bearer ${token}`;
        return config
    }
    return config
   
},(error) =>{
    return Promise.reject(error);
});

export default apiClient