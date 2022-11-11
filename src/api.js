import axios from 'axios'

const api = axios.create({
    baseURL: 'http://40.127.194.127:777/api/Emergency/',
    //   timeout: 1000,
    //   headers: {'X-Custom-Header': 'foobar'}
});


api.interceptors.response.use((response) => response, (error) => {
    errors[error.response.status](error)
    throw error
});

const errors = {
    404: () => {
        console.error('Not Found Error');
    },
    500: () => {
        console.error('Error in server');
    }
}

export default api;
