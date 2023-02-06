import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.timeout = 3000;

const getAxiosToken = (): string => {
  return localStorage.getItem("token");
};

const customAxios = axios.create({});

customAxios.interceptors.request.use((req) => {
  if (req.headers) {
    req.headers["Authorization"] = getAxiosToken();
  }
  return req;
});

customAxios.interceptors.response.use(
  (res) => {
    const data = res.data;
    return data;
  },
  (err) => Promise.reject(err)
);

// export const postApi = async (path: string, data: any) => {
//   return await customAxios.post(path, data);
// };

// export const getApi = async (path: string, params: any) => {
//   console.log({ path, params });
//   return await customAxios.get(path, { params });
// };

// export const putApi = async (path: string, data: any) => {
//   return await customAxios.put(path, data);
// };

// export const deleteApi = async (path: string, params: any) => {
//   return await customAxios.delete(path, { params });
// };
