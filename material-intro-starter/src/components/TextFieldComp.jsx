import { Stack, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

const TextFieldComp = () => {
  return (
    <div>
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
        error={false}
        helperText="Incorrect email format"
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
    </div>
  );
};

export default TextFieldComp;
