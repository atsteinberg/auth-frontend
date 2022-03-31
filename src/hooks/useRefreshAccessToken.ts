import { useSetRecoilState } from 'recoil';
import { userState } from 'recoil/store';
import { publicAxios } from 'services/axios/axios';

const useRefreshAccessToken = () => {
  const setUser = useSetRecoilState(userState);
  return async () => {
    try {
      const response = await publicAxios.get('/auth/refresh', {
        withCredentials: true,
      });
      const accessToken = response.data?.access_token;
      if (accessToken) {
        setUser({
          accessToken,
        });
        return accessToken;
      }
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
    }
    return null;
  };
};

export default useRefreshAccessToken;
