import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';

const UnauthenticatedApp: FC = () => (
  <Routes>
    <Route path='register' element={ null } />
    <Route path='*' element={ <Login /> } />
  </Routes>);

export default UnauthenticatedApp;
