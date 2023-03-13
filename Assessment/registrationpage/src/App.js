import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import LoginPage from './account/login/LoginPage';
import Registrationpage from './account/register/Registrationpage';
import SetPassword from './account/register/SetPassword';
import Dashboard from './features/dashboard/Dashboard';
import ForgotPassword from './account/forgot-password/ForgotPassword';
import SideNavbar from './common/side-navbar/SideNavbar';
import Product from './features/products/Product';
import Comment from './features/posts/Comment';
import TodoForm from './features/todos/TodoForm';
import TodoItem from './features/todos/TodoItem';
import Post from './features/posts/Post';
import UserList from './features/users/UserList';



const theme = createTheme();

function App() {
  return (
    <div>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
       <Route exact path="/login" element={<LoginPage/>} />
        <Route exact path="/register" element={<Registrationpage/>} />
        <Route exact path="/setpassword" element={<SetPassword/>} />
        <Route exact path="/forgotpassword" element={<ForgotPassword/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/sidenav" element={<SideNavbar/>} />
        <Route exact path="/products" element={<Product/>} />
        <Route exact path="/posts" element={<Post/>} />
        <Route exact path="/userlisting" element={<UserList/>} />

        <Route exact path="/comments" element={<Comment/>} />
        <Route exact path="/todo" element={<TodoForm/>} />
        <Route exact path="/todos" element={<TodoItem/>} />
        </Routes>
      </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
