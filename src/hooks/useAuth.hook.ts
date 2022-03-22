import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import UserLogin from 'classes/userLogin.class';
import UserRegistration from 'classes/userRegistration.class';
import userState from '../recoil/store';

const useAuth = () => {
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();
  const login = (data: UserLogin) => {
    setUser({ id: data.email });
    navigate('/');
  };
  const register = (data: UserRegistration) => {
    navigate('/login');
  };
  return {
    login,
    register,
  };
};

export default useAuth;
