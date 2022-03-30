import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import Box from '@mui/material/Box';
import UserRegistration from 'classes/userRegistration.class';
import useAuth from 'hooks/useAuth.hook';
import { FC } from 'react';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import CardButtons from '../../../components/CardButtons';
import RegisterForm from '../../../components/RegisterForm';

const resolver = classValidatorResolver(UserRegistration);

const Registration: FC = () => {
  const { register } = useAuth();
  const {
    reset, formState: { errors }, handleSubmit, control,
  } = useForm<UserRegistration>({ resolver });
  const onSubmit = async (data: UserRegistration) => {
    await register(data);
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
