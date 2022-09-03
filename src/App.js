import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import CakeSection from "./components/CakeSection";
import Contact from "./components/Contact";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      main: '#864313',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      {/* import Container to center the MainSection */}
      <Container>
        <MainSection />
        <CakeSection />
        <Contact/>
      </Container>

    </ThemeProvider>
  );
}

export default App;
