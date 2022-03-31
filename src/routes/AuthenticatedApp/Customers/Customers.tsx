import { Box, Typography } from '@mui/material';
import CustomerList from 'components/CustomerList';

const Customers = () => (
  <Box marginY={ 4 }>
    <Typography variant='h2'>Customers</Typography>
    <CustomerList />
  </Box>
);

export default Customers;
