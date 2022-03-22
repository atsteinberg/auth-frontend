import { TextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

type FormTextInputProps = {
  control: Control;
  name: string;
} & TextFieldProps;

const FormTextInput: FC<FormTextInputProps> = ({ control, name, ...props }) => (
  <Controller
    control={ control }
    name={ name }
    defaultValue=""
    render={
      ({ field }) => <TextField
        value={ field.value }
        onChange={ field.onChange }
        style={ { marginBottom: '0.5rem' } }
        { ...props }
      />
    }
  />
);

export default FormTextInput;
