import React from 'react';
import { createStyles, makeStyles, useTheme, Theme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBarComponent from '../components/layout/AppBar.component';
import DrawerComponent from '../components/layout/Drawer.component';
import { DashboarPage } from './dashboard.page';
import { theme } from '../theme/theme';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    
    content: {
      flexGrow: 1,
      marginTop: 64,
      padding: theme.spacing(3),
      overflow: 'auto'
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarComponent drawerOpen={handleDrawerOpen} isDrawerOpen={open} drawerWidth={300} />
      <DrawerComponent drawerOpen={open} drawerClose={handleDrawerClose} />
      
      <main className={classes.content}>
        <DashboarPage />
      </main>
    </ThemeProvider>
  );
}

export default App;

