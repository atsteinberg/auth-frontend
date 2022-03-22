import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Login from './Login';
import Registration from './Registration';

const UnauthenticatedApp: FC = () => (
  <Routes>
    <Route element={ <Layout /> }>
      <Route path='register' element={ <Registration /> } />
      <Route path='*' element={ <Login /> } />
    </Route>
  </Routes>);

export default UnauthenticatedApp;
