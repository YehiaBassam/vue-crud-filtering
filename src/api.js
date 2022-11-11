import axios from 'axios';

const token = "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3VwZXJhZG1pbiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjAwMDdjYWY1LWFjNjktNDViNi1hOTA1LWI1NjBlNTkxOWI4OSIsImV4cCI6MTY2ODI0OTkzOCwiaXNzIjoiQ2xpbml2aXNvciIsImF1ZCI6IkNsaW5pdmlzb3IifQ.OiJ62MlOGqxozyP2Uy6Ux-0uIg9L_UJdlLjfbR9Tu1k";
const api = axios.create({
    baseURL: 'http://40.127.194.127:777/api/Emergency/',
    headers: { Authorization: `Bearer ${token}` }
});


api.interceptors.response.use((response) => response, (error) => {
    errors[error.response.status](error);
    throw error;
});

const errors = {
    404: () => {
        console.error('404 - Not Found Error');
    },
    415: () => {
        console.error('415 - Unsupported Media Type');
    },
    500: () => {
        console.error('500 - Error in server');
    }
}

export default api;
