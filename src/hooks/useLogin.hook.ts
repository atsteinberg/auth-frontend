import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import UserLogin from 'classes/userLogin.class';
import userState from '../recoil/store';

const useLogin = () => {
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();
  const login = (data: UserLogin) => {
    setUser({ id: data.email });
    navigate('/');
  };
  return login;
};

export default useLogin;
