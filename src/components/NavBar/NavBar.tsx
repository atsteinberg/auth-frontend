import {
  AppBar, Box, IconButton, Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Logout } from '@mui/icons-material';

const NavBar = () => (
  <AppBar position='fixed'>
    <Toolbar>
      <Box sx={ { flexGrow: 1 } }>

        <IconButton
          edge='start'
          color='inherit'
          size='large'
        >
          <MenuIcon/>
        </IconButton>
      </Box>
      <IconButton
        color='inherit'
        size='large'>
        <Logout />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default NavBar;
