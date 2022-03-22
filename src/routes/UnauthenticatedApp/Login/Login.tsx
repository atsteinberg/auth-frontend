import {
  Box,
} from '@mui/material';
import UserLogin from 'classes/userLogin.class';
import { FC } from 'react';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import useAuth from 'hooks/useAuth.hook';
import LoginForm from './LoginForm/LoginForm';
import CardButtons from '../CardButtons';

const resolver = classValidatorResolver(UserLogin);

const Login: FC = () => {
  const { login } = useAuth();
  const {
    control, handleSubmit, reset, formState: { errors },
  } = useForm<UserLogin>({ resolver });

  const genericControl = control as unknown as Control<FieldValues, unknown>;
  const onSubmit = (data: UserLogin) => {
    login(data);
  };
  return (
    <>
      <LoginForm errors={ errors } control={ genericControl } />
      <CardButtons reset={ () => reset() } handleSubmit={ handleSubmit(onSubmit) } submitText="login"/>
      <Box display='flex' justifyContent="center" marginTop="1rem">
        <Box marginRight='0.5rem'>
                or
        </Box>
        <Link to="/register"> register</Link>
      </Box>
    </>
  );
};

export default Login;
