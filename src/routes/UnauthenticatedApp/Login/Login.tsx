import {
  Box,
  Button, Card, CardActionArea, CardContent, Checkbox, Container, FormControlLabel, Grid,
} from '@mui/material';
import UserLogin from 'classes/userLogin.class';
import FormTextInput from 'components/FormTextInput/FormTextInput';
import useLogin from 'hooks/useLogin.hook';
import { FC, useState } from 'react';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { classValidatorResolver } from '@hookform/resolvers/class-validator';

const resolver = classValidatorResolver(UserLogin);

const Login: FC = () => {
  const login = useLogin();
  const { control, handleSubmit, reset } = useForm<UserLogin>({ resolver });
  const [passwordTextFieldType, setPasswordTextfielType] = useState('password');

  const genericControl = control as unknown as Control<FieldValues, unknown>;
  const onSubmit = (data: UserLogin) => login(data);
  return (
    <Box display="flex" alignItems="center" height="100vh">
      <Container maxWidth="md">
        <Card sx={
          {
            margin: {
              md: '0 5rem 30% 5rem', padding: '2rem',
            },
          }
        } >
          <form>
            <CardContent>
              <Grid container rowGap="2rem">
                <Grid item xs={ 12 }>
                  <FormTextInput fullWidth label="Email" name="email" control={ genericControl } required />
                </Grid>
                <Grid item xs={ 12 } display="flex" alignItems="center">
                  <FormTextInput
                    label="Password"
                    name="password"
                    control={ genericControl }
                    type={ passwordTextFieldType }
                    required
                    sx={ { flex: 1 } }
                    autoComplete="new-password"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={ (_, checked) => setPasswordTextfielType(checked ? 'text' : 'password') } />
                    }
                    label="show"
                    sx={ { marginLeft: '1rem' } }
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActionArea sx={
              {
                display: 'flex', justifyContent: 'space-between', padding: '0 1rem', marginTop: '1rem',
              }
            }>
              <Button onClick={ () => reset() } type="button" sx={ { minWidth: '45%' } }>cancel</Button>
              <Button onClick={ handleSubmit(onSubmit) } type="submit" variant='contained' sx={ { minWidth: '45%' } }>login</Button>
            </CardActionArea>
            <Box display='flex' justifyContent="center" marginTop="1rem">
              <Box marginRight='0.5rem'>
                or
              </Box>
              <Link to="/register"> register</Link>
            </Box>
          </form>
        </Card>
      </Container>
    </Box>
  );
};

export default Login;
