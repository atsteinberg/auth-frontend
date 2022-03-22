import Box from '@mui/material/Box';
import UserRegistration from 'classes/userRegistration.class';
import useAuth from 'hooks/useAuth.hook';
import { FC } from 'react';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import CardButtons from '../CardButtons';
import RegisterForm from './RegisterForm';

const Registration: FC = () => {
  const { register } = useAuth();
  const {
    reset, formState: { errors }, handleSubmit, control,
  } = useForm<UserRegistration>();
  const onSubmit = (data: UserRegistration) => {
    register(data);
  };
  const genericControl = control as unknown as Control<FieldValues, unknown>;

  return (
    <>
      <RegisterForm errors={ errors } control={ genericControl } />
      <CardButtons reset={ () => reset() } handleSubmit={ handleSubmit(onSubmit) } submitText="register" />
      <Box display='flex' justifyContent="center" marginTop="1rem">
        <Box marginRight='0.5rem'>
                or
        </Box>
        <Link to="/login"> log in</Link>
      </Box>
    </>
  );
};

export default Registration;
