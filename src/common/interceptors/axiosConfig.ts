import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// Add temp URL here
const URL = "https://assurance.anasmk.in/api/student";
// const URL: string = process.env.REACT_APP_BASE_URL ?? "";

const API = axios.create({
  baseURL: URL,
});

export const axiosInstance = async (options: {
  token?: boolean;
  data: AxiosRequestConfig;
}): Promise<AxiosResponse<any>> => {
  const accessToken = sessionStorage.getItem("studentToken");

  const onSuccess = (res: AxiosResponse<any>) => {
    return res;
  };

  const onError = (err: any) => {
    console.log("Err", err.response);
    if (err.response && err.response.status) {
      if (
        err.response.status === 401 ||
        err.response.status === 403 ||
        err.response.status === 404
      ) {
        if (accessToken) {
          sessionStorage.clear();
        }
      }
    }
    return Promise.reject(err);
  };

  if (options.token && accessToken) {
    API.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    API.defaults.headers.common["Accept"] = "application/json";
    return API(options.data).then(onSuccess).catch(onError);
  } else {
    API.defaults.headers.common["Accept"] = "application/json";
    delete API.defaults.headers.common["Authorization"];
    return API(options.data).then(onSuccess).catch(onError);
  }
};
