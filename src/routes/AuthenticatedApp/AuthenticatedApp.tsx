import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomerDetails from './CustomerDetails';
import Customers from './Customers';
import Layout from './Layout';

const AuthenticatedApp: FC = () => (
  <Routes>
    <Route element={ <Layout /> }>
      <Route path='customers' element={ <Customers /> } />
      <Route path='customers/:customerId' element={ <CustomerDetails /> } />
      <Route path='*' element={ null } />
    </Route>
  </Routes>
);

export default AuthenticatedApp;
