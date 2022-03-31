import { Typography } from '@mui/material';
import { FC } from 'react';
import useCustomerList from './CustomerList.hook';

const CustomerList: FC = () => {
  const { customers } = useCustomerList();
  return (<>
    { customers.map((customer) => <Typography key={ customer.customerId } variant='h3'>{ customer.fullName }</Typography>) }
  </>
  );
};

export default CustomerList;
