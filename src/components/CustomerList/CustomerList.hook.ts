import { PERSON_PLACEHOLDER_URL } from 'constants/common.constants';
import usePrivateAxios from 'hooks/usePrivateAxios.hook';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { customersState } from 'recoil/store';
import { Customer } from 'types/customer.type';

const useCustomerList = () => {
  const [customers, setCustomers] = useRecoilState(customersState);
  const privateAxios = usePrivateAxios();
  useEffect(() => {
    if (!customers) {
      (async () => {
        try {
          const response = await privateAxios.get<Customer[]>('/customers');
          if (!response?.data) {
            throw new Error('could not fetch customers');
          }
          setCustomers(response.data.map((customer) => ({
            ...customer,
            photoThumbnail: customer.photoThumbnail || PERSON_PLACEHOLDER_URL,
          })));
        } catch (error) {
          console.error(error); // eslint-disable-line no-console
          toast.error('Something went wrong. Please try again later');
        }
      })();
    }
  }, [privateAxios, setCustomers]);
  return { customers };
};

export default useCustomerList;
