import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import LoginPage from './components/LoginPage';
import Registrationpage from './components/Registrationpage';
import SetPassword from './components/SetPassword';
import Dashboard from './components/Dashboard';

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
        <Route exact path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </ThemeProvider>
    </div>
  );
}

export default App;
