import { useRecoilValue } from 'recoil';
import userState from 'recoil/store';

const Customers = () => {
  const user = useRecoilValue(userState);
  return (
    <h1>{ user?.accessToken }</h1>
  );
};

export default Customers;
