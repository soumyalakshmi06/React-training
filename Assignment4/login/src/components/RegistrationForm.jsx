import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";

function RegistrationForm() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [email, setEmail] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (passwordMatch) {
      localStorage.setItem(email, password);
      console.log("Registration successful!");
      handleClick();
    } else {
      window.alert("Passwords do not match");
    }
  };

  return (
    <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
      <div className="main">
        <div className="register">
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: "400px", mt: "50px" }}>
              <form onSubmit={handleSubmit}>
                <h1>Register here</h1>
                <TextField required fullWidth margin="normal" label="First Name" name="fname" autoFocus/>
               
                <TextField required fullWidth margin="normal" label="Last Name" name="lname" />
                
                <TextField required fullWidth margin="normal" label="Age" name="age" type="number"/>

                <TextField required fullWidth margin="normal" label="Email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                
                <TextField required fullWidth margin="normal" label="Password:" name="password"  type="password" value={password} onChange={handlePasswordChange} />

                <TextField required fullWidth margin="normal" label="Confirm Password:" name="cpassword" type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
               

                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender" sx={{ mb: "20px" }}>
                  <Stack direction="row">
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                  </Stack>
                </RadioGroup>
                
                <Button fullWidth variant="contained" sx={{ mt: "20px" }} type="submit">Register</Button>
              </form>
            </Box>
          </Box>
        </div>
      </div>
    </Box>
  );
}

export default RegistrationForm;
