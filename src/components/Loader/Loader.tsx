import {
  Box, CircularProgress,
} from '@mui/material';
import { FC } from 'react';

const Loader: FC = () => (
  <Box
    height='100vh'
    display='flex'
    justifyContent='center'
    width='100%'
    position='absolute'
    top='30%'
    left={ 0 }
  >
    <CircularProgress />
  </Box>
);
export default Loader;
