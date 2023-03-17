import { Typography } from "@mui/material";
import { color } from "@mui/system";

const TypoButtons = () => {
  return (
    <div>
      <Typography variant="h4" align="center" mt={3} color="forestgreen">
        MUI Typo
      </Typography>
      <Typography 
      variant="body2" 
      align="justify" 
      mt={4}
      sx={{backgroundColor: "red", color: "white",fontSize:"1.5rem"}}
       >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, impedit atque! Dicta sequi est magni incidunt adipisci. Ipsum architecto rerum eveniet sunt reprehenderit. Perferendis, veniam ducimus. Adipisci alias officiis quo.
      </Typography>
      <Typography variant="button" >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit nisi exercitationem ratione voluptates, eos quaerat corrupti, facere veniam, quia ut obcaecati similique dolorem saepe velit.

      </Typography>
    </div>
  );
};

export default TypoButtons;
