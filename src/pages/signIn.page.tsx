import {
  Box,
  Button,
  Card,
  Container,
  createStyles,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import useAuth from '../contexts/auth';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      Height: '100%'
    },

    form: {
      display: 'flex',
      flexDirection: 'column',
      width: 400,
      padding: theme.spacing(3),
      overflow: 'auto'
    },

    button: {
      marginTop: 30,
    },
    buttonGorup: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 30,
      marginLeft: 20,
      marginRight: 20
    },
    input: {
      marginTop: 20,
    },
    notTextTranform: {
      textTransform: 'none'
    }
  }),
);

export const SignInPage: React.FC = () => {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const handleSignIn = () => {
    signIn(userName, password, false);
  }
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Card component='form' className={classes.form}>
        <Typography variant='h4' align='center' >Login</Typography>

        <TextField
          variant='outlined'
          size='small'
          placeholder='Nome de usuàrio'
          className={classes.input}
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <TextField
          variant='outlined'
          size='small'
          type='password'
          placeholder='Senha'
          className={classes.input}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button
          variant='contained'
          color='primary'
          size='large'
          className={classes.button}
          onClick={handleSignIn}
        >
          Entrar
        </Button>

        <Box className={classes.buttonGorup} >
          <Button
            className={classes.notTextTranform}
          >
            <Typography variant='caption'> Esqucí minha senha </Typography>
          </Button>
          <Button
            className={classes.notTextTranform}
          >
            <Typography variant='caption'> Criar conta </Typography>
          </Button>
        </Box>
      </Card>
    </Container>
  );
}