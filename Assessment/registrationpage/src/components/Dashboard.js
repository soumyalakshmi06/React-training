import React from 'react';
import { makeStyles } from '@mui/styles';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Paper, Grid, Typography, AppBar,Drawer,List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import StoreIcon from '@mui/icons-material/Store';
import PostAddIcon from '@mui/icons-material/PostAdd';

import AssignmentIcon from '@mui/icons-material/Assignment';

import { Link ,Routes, Route } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';


import Products from './Products';
import Posts from './Posts';
import Todos from './Todos';
import UserListing from './UserListing';


const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const data2 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const drawerWidth = 240;



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(15),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Dashboard
        </Typography>
      </Toolbar>
     </AppBar>
       <Drawer className={classes.drawer} variant="permanent" classes={{  paper: classes.drawerPaper}}>
          <Toolbar />
          <div className={classes.drawerContainer}>
          <List>
            <Link to="/products">
              <ListItem >
                <ListItemIcon>
                  <StoreIcon />
                </ListItemIcon>
                <ListItemText primary="Products" />
              </ListItem>
            </Link>
            <Link to="/posts">
              <ListItem >
                <ListItemIcon>
                  <PostAddIcon />
                </ListItemIcon>
                <ListItemText primary="Post" />
              </ListItem>
            </Link>
            <Link to="/todos">
              <ListItem >
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Todos" />
              </ListItem>
            </Link>
            <Link to="/userlisting">
              <ListItem >
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="User Listing" />
              </ListItem>
            </Link>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
       
      <Routes>
          <Route exact path="/products" element={<Products/>} />
          <Route exact path="/posts" element={<Posts/>} />
          <Route exact path="/todos" element={<Todos/>} />
          <Route exact path="/userlisting" element={<UserListing/>} />
        </Routes>
       
        
        </main>
        <div>

    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Typography variant="h5" gutterBottom>
            Bar Chart
          </Typography>
          <BarChart width={500} height={300} data={data}>
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Typography variant="h5" gutterBottom>
            Line Chart
          </Typography>
          <LineChart width={400} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Typography variant="h5" gutterBottom>
            Pie Chart
          </Typography>
          <PieChart width={500} height={300}>
            <Pie
              data={data2}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data2.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </Paper>
      </Grid>
    </Grid>
    </div>
    </div>

  );
 }
export default Dashboard;