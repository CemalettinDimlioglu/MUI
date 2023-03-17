import { Stack, Typography } from "@mui/material";
import  TextField  from "@mui/material/TextField";

const TextFieldComp = () => {
  return (
    <div>
    <Typography variant="h4" color="secondary.dark" align="center" m={4} >TEXT FIELD</Typography>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </div>
  );
}

export default TextFieldComp