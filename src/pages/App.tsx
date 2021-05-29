import React from 'react';
import { createStyles, makeStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBarComponent from '../components/layout/AppBar.component';
import DrawerComponent from '../components/layout/Drawer.component';
import { theme } from '../theme/theme';
import { Routes } from '../routes/routes';
import { AuthProvider } from '../contexts/auth';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      Height: '100%'
    },

    content: {
      marginTop: 64,
      padding: theme.spacing(3),
      overflow: 'auto',
      Height: '700px'
    },
  }),
);

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const ContentWrapper: React.FC = (props) => {
    return (
      <main className={classes.content}>
        {props.children}
      </main>
    )
  }

  return (

    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes contentWrapper={ContentWrapper}>
          <AppBarComponent drawerOpen={handleDrawerOpen} isDrawerOpen={open} drawerWidth={300} />
          <DrawerComponent drawerOpen={open} drawerClose={handleDrawerClose} />
        </Routes>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;

