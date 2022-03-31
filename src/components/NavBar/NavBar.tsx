import {
  AppBar, Box, IconButton, Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Logout } from '@mui/icons-material';
import useAuth from 'hooks/useAuth.hook';
import { useState } from 'react';
import SideBar from './SideBar';

const NavBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const { logout } = useAuth();

  const handleMenuItemClicked = () => {
    setSideBarOpen(!sideBarOpen);
  };

  const handleLogout: React.MouseEventHandler<HTMLButtonElement> = async () => {
    await logout();
  };
  return (<>
    <AppBar position='fixed' sx={ { zIndex: (theme) => theme.zIndex.drawer + 1 } }>
      <Toolbar>
        <Box sx={ { flexGrow: 1 } }>

          <IconButton
            edge='start'
            color='inherit'
            size='large'
            onClick={ () => handleMenuItemClicked() }
          >
            <MenuIcon/>
          </IconButton>
        </Box>
        <IconButton
          color='inherit'
          size='large'
          onClick={ handleLogout }
        >
          <Logout />
        </IconButton>
      </Toolbar>
    </AppBar>
    <SideBar open={ sideBarOpen } toggle={ handleMenuItemClicked } / >
  </>
  );
};

export default NavBar;
