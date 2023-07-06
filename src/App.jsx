import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import { Container, CssBaseline, createTheme, ThemeProvider } from '@mui/material'


function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#172627"
      },
      secondary: {
        main: "#20CD8D"
      },
      bg: {
        main: "#172627"
      },
      text: {
        main: "#FFFFFF"
      }
    },
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        // most basic recommended timing
        standard: 300,
        // this is to be used in complex animations
        complex: 375,
        // recommended when something is entering screen
        enteringScreen: 225,
        // recommended when something is leaving screen
        leavingScreen: 195,
      },
    }
  });

  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <NavBar />
    <Container sx={{height: "100vh" }} >
    <Outlet />
    </Container>
    </ThemeProvider>
    </>
  )
}

export default App
