import axios from "axios";

const axiosParams = {
    baseURL: process.env.REACT_APP_BASE_URL
};

const axiosInstance = axios.create(axiosParams)

function api(axios) {
    return {
        get: (url, config = {}) => axios.get(url, config),
        post: (url, body, config = {}) => axios.post(url, body, config),
        put: (url, body, config = {}) => axios.put(url, body, config),
        patch: (url, body, config = {}) => axios.patch(url, body, config),
        delete: (url, config = {}) => axios.delete(url,config),
    };
};

export default api(axiosInstance);