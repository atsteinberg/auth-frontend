import { transformCustomer } from 'helpers/customer.helpers';
import usePrivateAxios from 'hooks/usePrivateAxios.hook';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { customersState } from 'recoil/store';
import { CustomerFromApi } from 'types/customer.type';

const useCustomerDetails = () => {
  const { customerId } = useParams();
  const privateAxios = usePrivateAxios();
  const customers = useRecoilValue(customersState);
  const customerFromState = (customers || []).find((currentCustomer) => currentCustomer?.customerId === customerId);
  const [customer, setCustomer] = useState(customerFromState);

  useEffect(() => {
    if (!customer) {
      (async () => {
        const response = await privateAxios.get<CustomerFromApi>(`customers/${customerId}`);
        if (response.data) {
          setCustomer(transformCustomer(response.data));
        }
      })();
    }
  });

  return {
    customer,
  };
};

export default useCustomerDetails;
