import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { color } from "@mui/material";

const TypoButtons = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" mt={3} color="forestgreen">
          MUI Typo
        </Typography>
        <Typography
          variant="body2"
          align="justify"
          mt={4}
          sx={{ backgroundColor: "red", color: "white", fontSize: "1.5rem" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          impedit atque! Dicta sequi est magni incidunt adipisci. Ipsum
          architecto rerum eveniet sunt reprehenderit. Perferendis, veniam
          ducimus. Adipisci alias officiis quo.
        </Typography>
        <Typography variant="button">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit nisi
          exercitationem ratione voluptates, eos quaerat corrupti, facere
          veniam, quia ut obcaecati similique dolorem saepe velit.
        </Typography>
      </Container>
      <Container>
        <Box
          sx={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Button variant="text" color="warning">
            Text
          </Button>
          <Button variant="contained" color="error">
            Contained
          </Button>
          <Button variant="outlined" color="secondary">
            Outlined
          </Button>
          <Button variant="outlined">Primary</Button>
        </Box>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          justifyContent="center"
         mt={2}
        >
          <Button variant="text" color="error">
            Text
          </Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined">Primary</Button>
        </Stack>
      </Container>
    </>
  );
};

export default TypoButtons;
