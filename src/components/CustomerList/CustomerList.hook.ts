import usePrivateAxios from 'hooks/usePrivateAxios.hook';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Customer } from 'types/customer.type';

const useCustomerList = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const privateAxios = usePrivateAxios();
  useEffect(() => {
    (async () => {
      try {
        const response = await privateAxios.get<Customer[]>('/customers');
        if (!response?.data) {
          throw new Error('could not fetch customers');
        }
        setCustomers(response.data);
      } catch (error) {
        console.error(error); // eslint-disable-line no-console
        toast.error('Something went wrong. Please try again later');
      }
    })();
  });
  return { customers };
};

export default useCustomerList;
