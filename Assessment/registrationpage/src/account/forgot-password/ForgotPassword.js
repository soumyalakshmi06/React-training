import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, Grid } from '@material-ui/core';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordMatch(event.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordMatch(event.target.value === password);
  };
  const handleClick = () => {
    navigate("/login");
  };

 const validate = () => {
  const errors = {};

    if (!email) {
    errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Invalid email format';
    }

   if (!password) {
    errors.password = 'Password is required';
   } else if (
    !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)
   ) {
    errors.password =
      'Password must contain at least one number, one uppercase and lowercase letter, and at least 8 characters';
    }

   if (!confirmPassword) {
    errors.confirmPassword = 'Confirm password is required';
   } else if (confirmPassword !== password) {
    errors.confirmPassword = 'Passwords do not match';
   }

   setErrors(errors);
   return Object.keys(errors).length === 0;
  };


 const handleSubmit = (event) => {
   event.preventDefault();
   if (passwordMatch) {
    localStorage.setItem(email, password);
    console.log("Registration successful!");
    handleClick();
   } else {
    window.alert("Passwords do not match");
   }
   if (validate()) {

    navigate.push('/login');
   }
  };



 const isFormValid = !!email && !!password && !!confirmPassword;



  return (
    <Container maxWidth="sm">
    
      <Typography variant="h5" align="center" gutterBottom>
        Forgot Password
      </Typography>
      <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>

          <Grid item xs={12}>
            <TextField fullWidth label="Email Address" value={email} onChange={handleEmailChange}
              error={!!errors.email} helperText={errors.email} />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth label="New Password" type="password" value={password} onChange={handlePasswordChange}
              error={!!errors.password} helperText={errors.password} />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth label="Confirm new password" type="password" value={confirmPassword} onChange={handleConfirmPasswordChange}
              error={!!errors.confirmPassword} helperText={errors.confirmPassword} />
          </Grid>

          <Grid item xs={12}>
            <Button fullWidth variant="contained" type="submit" disabled={!isFormValid}>
              Submit
            </Button>
          </Grid>
      </Grid>
      </form>
    </Container>
  );
}

export default ForgotPassword;
