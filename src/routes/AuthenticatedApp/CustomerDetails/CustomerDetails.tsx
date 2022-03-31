import { Box } from '@mui/material';
import Loader from 'components/Loader';
import MainCustomerInfo from 'components/MainCustomerInfo/MainCustomerInfo';
import { FC } from 'react';
import useCustomerDetails from './CustomerDetails.hook';

const CustomerDetails: FC = () => {
  const { customer } = useCustomerDetails();
  if (!customer) {
    return <Loader />;
  }
  return (
    <Box marginY={ 4 }>
      <MainCustomerInfo { ...customer } />
    </Box>
  );
};

export default CustomerDetails;
