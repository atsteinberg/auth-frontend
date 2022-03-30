import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Customers from './Customers/Customers';
import Layout from './Layout';

const AuthenticatedApp: FC = () => (
  <Routes>
    <Route element={ <Layout /> }>
      <Route path='*' element={ <Customers /> } />
    </Route>
  </Routes>
);

export default AuthenticatedApp;
