import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { BarGroupChartComponente, chartDataItem } from '../components/charts/barGroupChart.component';

import produtionData from '../data/produtionByMouth.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export const DashboardPage: React.FC = () => {
  const classes = useStyles();

  const chartProdutionData: chartDataItem[] = produtionData.data.map( (data, index)=> {
    const dataValueName = Object.keys(data);

    return {
      name: data.mouth,
      value: [
        {
          name: dataValueName[0],
          value: data.estimado,
          type: 'bar'
        },
        {
          name: dataValueName[1],
          value: data.real,
          type: 'bar'
        },
        {
          name: 'Tendência',
          value: data.real,
          type: 'line'
        }
      ]
    }
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <BarGroupChartComponente data={chartProdutionData} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {/* <BarGroupChartComponente /> */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
