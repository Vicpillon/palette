import axios from "axios";

const customAxios = axios.create({});
customAxios.defaults.headers.post["Content-Type"] = "application/json";
customAxios.defaults.timeout = 5000;
customAxios.defaults.baseURL = "http://localhost:8000";

const getAuthToken = () => {
  return localStorage.getItem("token");
};

customAxios.interceptors.request.use(
  (req) => {
    if (req.headers) {
      req.headers["Authorization"] = `Bearer ${getAuthToken()}`;
    }
    return req;
  },
  (err) => {
    console.log(`axios-interceptors-request ${err}`);
    return Promise.reject(err);
  }
);

customAxios.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    console.log(`axios-interceptors-response ${err}`);
    return Promise.reject(err);
  }
);

/**
 *
 * @param {string} path
 * @param {{[param: string]: string}} params
 */
export const getApi = async (path, params) => {
  return await customAxios.get(path, { params });
};

/**
 *
 * @param {string} path
 * @param {{[key: string]: any}} data
 */
export const postApi = async (path, data) => {
  return await customAxios.post(path, data);
};
