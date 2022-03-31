import { Toolbar } from '@mui/material';
import Container from '@mui/material/Container';
import NavBar from 'components/NavBar';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Layout: FC = () => (
  <>
    <NavBar />

    <Container maxWidth="lg">
      <Toolbar />

      <Outlet />

    </Container>
  </>
);

export default Layout;
