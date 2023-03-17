import AppBarComp from "../components/AppBarComp";
import CardGrid from "../components/CardGrid";
import TextFieldComp from "../components/TextFieldComp";
import TypoButtons from "../components/TypoButtons";
import { createTheme, ThemeProvider } from "@mui/material";
import { deepOrange, pink } from "@mui/material/colors";

const Home = () => {
  const theme = createTheme({
palette :{
  primary:{
    main:"#bede",
  },
  secondary:{
    main:pink[500],
  },
  error:{
    main:deepOrange[500],
  }
},
  })
  return (
    <ThemeProvider theme={theme} >
      {/* <TypoButtons />
      <TextFieldComp/> */}
      <AppBarComp/>
      <CardGrid/>

    </ThemeProvider>
  );
};

export default Home;
