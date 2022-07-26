import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const configRequest = async (config: AxiosRequestConfig) => {
  const access_token = localStorage.getItem("access_token") || "";
  if (access_token)
    config.headers = { Authorization: `Bearer ${access_token}` };

  return config;
};

const responseResolve = (response: AxiosResponse) => {
  return response.data;
};

const responseReject = (error: AxiosError) => {
  return Promise.reject(error);
};

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "content-text": "application/json",
  },
});

axiosClient.interceptors.request.use(configRequest);

axiosClient.interceptors.response.use(responseResolve, responseReject);

export const axiosFormData = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "content-type": "multipart/form-data",
  },
});

axiosFormData.interceptors.request.use(configRequest);

axiosFormData.interceptors.response.use(responseResolve, responseReject);

export default axiosClient;
