import { create } from "apisauce";
import authStorage from "../auth/storage";
import settings from "../config/settings";
import cache from "../utility/cache";

const apiClient = create({ baseURL: settings.apiUrl });

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;

  request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const res = await get(url, params, axiosConfig);

  if (res.ok) {
    cache.store(url, res.data);
    return res;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : res;
};

export default apiClient;
