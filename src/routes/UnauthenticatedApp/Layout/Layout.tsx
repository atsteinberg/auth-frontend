import { Box, Card, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <Box display="flex" alignItems="center" height="100vh">
    <Container maxWidth="md">
      <Card sx={
        {
          marginBottom: '30%',
          padding: '2rem',
          marginX: {
            md: '5rem',
          },
          minWidth: '25rem',
        }
      } >

        <Outlet />
      </Card>
    </Container>
  </Box>
);

export default Layout;
