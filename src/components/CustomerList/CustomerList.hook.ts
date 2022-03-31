import { transformCustomer } from 'helpers/customer.helpers';
import usePrivateAxios from 'hooks/usePrivateAxios.hook';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { customersState } from 'recoil/store';
import { CustomerFromApi } from 'types/customer.type';

const useCustomerList = () => {
  const [customers, setCustomers] = useRecoilState(customersState);
  const privateAxios = usePrivateAxios();
  useEffect(() => {
    if (!customers) {
      (async () => {
        try {
          const response = await privateAxios.get<CustomerFromApi[]>('/customers');
          if (!response?.data) {
            throw new Error('could not fetch customers');
          }
          setCustomers(response.data.map(transformCustomer));
        } catch (error) {
          console.error(error); // eslint-disable-line no-console
          toast.error('Something went wrong. Please try again later');
        }
      })();
    }
  }, [privateAxios, setCustomers, customers]);
  return { customers };
};

export default useCustomerList;
