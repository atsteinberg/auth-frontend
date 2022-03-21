import AuthenticatedApp from './AuthenticatedApp/AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp/UnauthenticatedApp';

const Routes = () => {
  const user = false;
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Routes;
