import { ListItem, ListItemText } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export type MenuItemProps = {
  label: string;
  link?: string;
};

const MenuItem: FC<MenuItemProps> = ({ label, link }) => {
  const navigate = useNavigate();
  let handleClick: React.MouseEventHandler<HTMLDivElement> | undefined;
  if (link) {
    handleClick = () => navigate(link);
  }
  return (
    <ListItem button onClick={ handleClick }>
      <ListItemText primary={ label } />
    </ListItem>
  );
};

export default MenuItem;
