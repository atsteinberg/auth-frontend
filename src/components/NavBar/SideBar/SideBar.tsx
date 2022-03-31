import {
  Drawer, List, Toolbar,
} from '@mui/material';
import { FC } from 'react';
import MenuItem from './MenuItem';
import { MenuItemProps } from './MenuItem/MenuItem';

type SideBarProps = {
  open: boolean;
  toggle: () => void;
};

const drawerWidth = '20%';
const drawerMinWidth = 240;
const menuItems: MenuItemProps[] = [
  {
    label: 'Customers List',
    link: 'customers',
  },
  {
    label: 'Onboard Customer',
    link: 'onboard',
  },
];

export const SideBar: FC<SideBarProps> = ({ open, toggle }) => (
  <Drawer
    open={ open }
    sx={
      {
        width: drawerWidth,
        minWidth: drawerMinWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', minWidth: drawerMinWidth },
      }
    }
    onClose={ toggle }
  >
    <Toolbar />
    <List>
      { menuItems.map((item) => <MenuItem key={ item.label } { ...item } />) }
    </List>

  </Drawer>
);

export default SideBar;
