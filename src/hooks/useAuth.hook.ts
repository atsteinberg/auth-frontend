import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import UserLogin from 'classes/userLogin.class';
import UserRegistration from 'classes/userRegistration.class';
import { isAxiosError, publicAxios } from 'services/axios/axios';
import { toast } from 'react-toastify';
import userState from '../recoil/store';

const useAuth = () => {
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();
  const login = async (data: UserLogin) => {
    try {
      const response = await publicAxios.post('/auth/local/signin', data);
      const { data: { access_token: accessToken } } = response;
      setUser({
        accessToken,
      });
      navigate('/');
    } catch (error) {
      if (isAxiosError(error) && error.response?.status === 403) {
        toast.error('Email and password do not match');
      } else {
        toast.error('Login unsuccessful. Please try again later.');
      }
    }
  };

  const register = async (data: UserRegistration) => {
    try {
      const response = await publicAxios.post('/auth/local/signup', data);
      const { data: { access_token: accessToken } } = response;
      setUser({
        accessToken,
      });
      navigate('/login');
    } catch (error) {
      if (isAxiosError(error) && error.response?.status === 403) {
        toast.error('Email already in use. Please log in.');
      } else {
        toast.error('Could not register. Please try again later.');
      }
    }
  };
  return {
    login,
    register,
  };
};

export default useAuth;
