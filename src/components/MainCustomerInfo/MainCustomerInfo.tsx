import {
  Avatar, Box, Card, CardContent, Container, Grid, Typography,
} from '@mui/material';
import { SxObj } from 'mui/mui.types';
import { FC } from 'react';

type MainCustomerInfoProps = {
  fullName: string;
  dateOfBirth: string;
  country: string;
  photoThumbnail: string;
};

const styles: SxObj = {
  card: {
    padding: 2,
    minWidth: 300,
  },
  avatar: {
    height: {
      xs: '8rem',
      sm: '6rem',
    },
    width: {
      xs: '8rem',
      sm: '6rem',
    },
  },
};

const MainCustomerInfo: FC<MainCustomerInfoProps> = ({
  fullName, dateOfBirth, country, photoThumbnail,
}) => (
  <Container maxWidth="md">

    <Card sx={ styles.card }>
      <CardContent>
        <Box display='flex' flexDirection={ { xs: 'column', sm: 'row' } } alignItems='center'>
          <Box marginRight={ { sm: 10 } } marginBottom={ { xs: 4, sm: 0 } }>
            <Avatar alt={ fullName }src={ photoThumbnail } sx={ styles.avatar }/>
          </Box>
          <Grid container columnSpacing={ 4 } rowSpacing={ 1 } >
            <Grid item xs={ 12 } marginBottom={ 2 }>
              <Typography variant='h2' textAlign={ { xs: 'center', sm: 'left' } }>{ fullName }</Typography>
            </Grid>
            <Grid item sm={ 5 } xs={ 6 } textAlign={ { xs: 'right', sm: 'left' } }>
            date of birth
            </Grid>
            <Grid item sm={ 7 } xs={ 6 }>
              <Typography variant='body1'>{ dateOfBirth }</Typography>
            </Grid>
            <Grid item sm={ 5 } xs={ 6 } textAlign={ { xs: 'right', sm: 'left' } }>
            country of residence
            </Grid>
            <Grid item sm={ 7 } xs={ 6 }>
              <Typography variant='body1'>{ country }</Typography>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  </Container>
);

export default MainCustomerInfo;
