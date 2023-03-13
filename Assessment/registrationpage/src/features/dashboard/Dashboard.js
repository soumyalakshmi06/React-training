import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';

import SideNavbar from '../../common/side-navbar/SideNavbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const handleDrawerOpen = () => {
  //   // setOpen(true);
  //   setMobileOpen(!mobileOpen);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>

        <SideNavbar handleDrawerToggle={handleDrawerToggle} />

          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom>
              Dashboard
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>
            <LineChart />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>
            <BarChart />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper className={classes.paper}>
            <PieChart />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
