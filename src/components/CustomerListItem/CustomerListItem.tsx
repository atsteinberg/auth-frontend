import {
  Avatar, Chip, ListItem, ListItemAvatar, ListItemButton, ListItemText,
} from '@mui/material';
import { FC } from 'react';
import { Customer } from 'types/customer.type';

type CustomerListPicks = 'customerId' | 'photoThumbnail' | 'fullName' | 'email' | 'status';

export type CustomerListItemProps = Pick<Customer, CustomerListPicks> & {
  select: (id: string) => void;
  selectedId: string;
};

export const CustomerListItem: FC<CustomerListItemProps> = ({
  customerId, photoThumbnail, fullName, email, status, select, selectedId,
}) => (
  <ListItem alignItems='flex-start'>
    <ListItemButton
      selected={ customerId === selectedId }
      onClick={ () => select(customerId) }
    >
      <ListItemAvatar>
        <Avatar alt={ fullName } src={ photoThumbnail }/>
      </ListItemAvatar>
      <ListItemText primary={ fullName } secondary={ email }/>
      <Chip label={ status } />
    </ListItemButton>
  </ListItem>
);

export default CustomerListItem;
