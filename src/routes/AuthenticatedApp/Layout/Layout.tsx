import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import NavBar from 'components/NavBar';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => (
  <Box display="flex" alignItems="center" height="100vh">
    <NavBar />
    <Container maxWidth="md">

      <Outlet />

    </Container>
  </Box>
);

export default Layout;
