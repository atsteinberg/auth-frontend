import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { customersState } from 'recoil/store';

const CustomerDetails: FC = () => {
  const { customerId } = useParams();
  const customers = useRecoilValue(customersState);
  const customer = (customers || []).find((currentCustomer) => currentCustomer?.customerId === customerId);
  return (
    <Box marginY={ 4 }>
      <Typography variant='h3'>{ customer?.fullName }</Typography>
    </Box>
  );
};

export default CustomerDetails;
