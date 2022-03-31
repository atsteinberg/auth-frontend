import { ListItem, ListItemText } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export type MenuItemProps = {
  label: string;
  link?: string;
  close?: () => void;
};

const MenuItem: FC<MenuItemProps> = ({ label, link, close }) => {
  const navigate = useNavigate();
  let handleClick: React.MouseEventHandler<HTMLDivElement> | undefined;
  if (link || close) {
    handleClick = () => {
      if (close) {
        close();
      }
      if (link) {
        navigate(link);
      }
    };
  }
  return (
    <ListItem button onClick={ handleClick }>
      <ListItemText primary={ label } />
    </ListItem>
  );
};

export default MenuItem;
