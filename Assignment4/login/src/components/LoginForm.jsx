import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Box, Button, Typography } from "@mui/material";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

   
    const storedPassword = localStorage.getItem(email);
    if (storedPassword === password) {
      console.log("Login successful!");
    
      navigate("/dashboard");
    } else {
      window.alert("Incorrect email or password");
      console.log("Incorrect email or password");
    }
  };

  return (
    <div className="full-screen-container">
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}> 
           <Box sx={{ width: 400 }}>     
              <Typography variant="h4" align="center" mb={2}>
      <h2>Login Page</h2>
      </Typography>
      <form onSubmit={handleLogin}>
        <div>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </div>
      </form>
      </Box>
      </Box>
    </div>
  );
}

export default LoginForm;
