import {
  Button, CardActions,
} from '@mui/material';
import { FC } from 'react';

type CardButtonsProps = {
  reset: React.MouseEventHandler<HTMLButtonElement>;
  handleSubmit: React.MouseEventHandler<HTMLButtonElement>;
  submitText: string;
};

const CardButtons: FC<CardButtonsProps> = ({ reset, handleSubmit, submitText }) => (
  <CardActions sx={
    {
      display: 'flex', justifyContent: 'space-between', padding: '0 1rem', marginTop: '1rem',
    }
  }>
    <Button onClick={ reset } type="button" sx={ { minWidth: '45%' } }>cancel</Button>
    <Button onClick={ handleSubmit } type="submit" variant='contained' sx={ { minWidth: '45%' } }>{ submitText }</Button>
  </CardActions>
);

export default CardButtons;
