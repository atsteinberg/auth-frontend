import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from 'recoil/store';
import { privateAxios } from 'services/axios/axios';
import useRefreshAccessToken from './useRefreshAccessToken';

const usePrivateAxios = () => {
  const refresh = useRefreshAccessToken();
  const user = useRecoilValue(userState);
  useEffect(() => {
    const requestInterceptor = privateAxios.interceptors.request.use(
      (config) => {
        if (!config?.headers?.Authorization) {
          const newConfig = {
            ...config,
            headers: {
              ...config.headers,
              Authorization: `Bearer ${user?.accessToken}`,
            },
          };
          return newConfig;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    const responseInterceptor = privateAxios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const previousRequest = error?.config;
        if (error?.response?.status === 401 && !previousRequest?.retry) {
          previousRequest.retry = true;
          const newAccessToken = await refresh();
          previousRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return privateAxios(previousRequest);
        }
        return Promise.reject(error);
      },
    );
    return () => {
      privateAxios.interceptors.request.eject(requestInterceptor);
      privateAxios.interceptors.response.eject(responseInterceptor);
    };
  }, [refresh, user?.accessToken]);

  return privateAxios;
};
export default usePrivateAxios;
