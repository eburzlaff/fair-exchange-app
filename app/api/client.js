import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://192.168.1.108:9000/api",
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    console.log("Data stored in cache:", url, response.data);
    return response;
  }

  const data = await cache.get(url);
  if (data) {
    console.log("Data retrieved from cache:", url, data);
    return { ok: true, data };
  } else {
    console.log("Cache miss, requesting data from server:", url);
    return response;
  }
};

export default apiClient;
