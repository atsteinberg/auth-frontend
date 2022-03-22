import { useRecoilState } from 'recoil';
import userState from '../recoil/store';
import AuthenticatedApp from './AuthenticatedApp/AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp/UnauthenticatedApp';

const Routes = () => {
  const [user] = useRecoilState(userState);
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Routes;
