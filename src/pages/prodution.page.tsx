import React, { useState } from 'react';
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
      width: 900,
      padding: theme.spacing(3),
      overflow: 'auto'
    },

    button: {
      marginTop: 30,
      width: 160
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

function dateFormate(date: Date) {
  let dateFormated = ((date.getDate())) + "-" + ((date.getMonth() + 1)) + "-" + date.getFullYear();
  return dateFormated;
}

export const ProductionPage: React.FC = () => {
  const [date, setDate] = useState(dateFormate(new Date()));

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Card component='form' className={classes.form}>
        <Typography variant='h4' align='center' >Adicionar produção diária</Typography>

        <TextField
          variant='outlined'
          size='small'
          type='date'
          placeholder='Produto'
          className={classes.input}
          defaultValue={date}
          value={date}
        onChange={(event) => setDate(event.target.value)}
        />

        <TextField
          variant='outlined'
          size='small'
          placeholder='Produto'
          className={classes.input}
        // value={userName}
        // onChange={(event) => setUserName(event.target.value)}
        />
        <TextField
          variant='outlined'
          size='small'
          type='number'
          placeholder='Quantidade'
          className={classes.input}
        // value={password}
        // onChange={(event) => setPassword(event.target.value)}
        />

        <Button
          variant='contained'
          color='primary'
          size='large'
          className={classes.button}
        // onClick={handleSignIn}
        >
          Salvar
        </Button>
      </Card>
    </Container>
  );
}