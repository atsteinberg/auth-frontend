import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import FormTextInput from 'components/FormTextInput/FormTextInput';
import { FC, useState } from 'react';
import { Control, FieldErrors } from 'react-hook-form';

type LoginFormProps = {
  errors: FieldErrors;
  control: Control;
};

const LoginForm: FC<LoginFormProps> = ({ errors, control }) => {
  const [passwordTextFieldType, setPasswordTextfielType] = useState('password');
  return (
    <CardContent>
      <form>
        <Grid container rowGap="2rem">
          <Grid item xs={ 12 }>
            <FormTextInput
              fullWidth
              label="Email"
              name="email"
              control={ control }
              required
              error={ Boolean(errors.email) }
              helperText={ errors.email?.message }
            />
          </Grid>
          <Grid item xs={ 12 } display="flex" alignItems={ 'flex-start' }>
            <FormTextInput
              label="Password"
              name="password"
              control={ control }
              type={ passwordTextFieldType }
              required
              sx={ { flex: 1 } }
              autoComplete="new-password"
              error={ Boolean(errors.password) }
              helperText={ errors.password?.message }
            />
            <FormControlLabel
              control={
                <Checkbox
                  onChange={ (_, checked) => setPasswordTextfielType(checked ? 'text' : 'password') } />
              }
              label="show"
              sx={ { marginLeft: '1rem', marginTop: '0.5rem' } }
            />
          </Grid>
        </Grid>
      </form>
    </CardContent>
  );
};

export default LoginForm;
