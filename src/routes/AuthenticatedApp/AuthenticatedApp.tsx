import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import userState from 'recoil/store';

const AuthenticatedApp: FC = () => {
  const user = useRecoilValue(userState);
  return (
    <div>
      <h1>Authenticated App</h1>
      <h2>user</h2>
      <p>{ user?.accessToken }</p>
    </div>
  );
};

export default AuthenticatedApp;
