import { Container, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const TextFieldComp = () => {
     const [error, setError] = useState(false)
  return (
    <Container maxWidth="sm" >
      <Typography variant="h4" color="secondary.dark" align="center" m={4}>
        TEXT FIELD
      </Typography>
      <TextField
        id="email"
        label="email"
        type="email"
        variant="outlined"
        placeholder="Enter Your Email"
        margin="normal"
        required 
        error={true}
        helperText={error && "Incorrect email format"}
      />
      <TextField
        id="password"
        label="password"
        type="password"
        variant="filled"
        placeholder="Enter Password"
        margin="normal"
        required
     
      />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Container>
  );
};

export default TextFieldComp;
