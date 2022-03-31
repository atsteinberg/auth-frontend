import { ClickAwayListener, List } from '@mui/material';
import CustomerListItem from 'components/CustomerListItem';
import Loader from 'components/Loader';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCustomerList from './CustomerList.hook';

const CustomerList: FC = () => {
  const { customers } = useCustomerList();

  const navigate = useNavigate();

  const [selectedCustomerId, setSelectedCustomerId] = useState<string>('');
  useEffect(() => {
  }, [selectedCustomerId]);

  const handleSelect = (id: string) => {
    setSelectedCustomerId(id);
    navigate(`/customers/${id}`);
  };

  if (!customers) {
    return <Loader />;
  }

  return (
    <ClickAwayListener onClickAway={ () => setSelectedCustomerId('') }>

      <List sx={ { width: '100%', maxWidth: 360, bgcolor: 'background.paper' } }>
        {
          customers.map((customer) => <CustomerListItem
            { ...customer }
            key={ customer.customerId }
            select={ handleSelect }
            selectedId={ selectedCustomerId }
          />)
        }
      </List>
    </ClickAwayListener>
  );
};

export default CustomerList;
