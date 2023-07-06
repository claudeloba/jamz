import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function ResponsiveAppBar() {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography 
            variant="h3"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'roboto',
              fontWeight: 700,
              letterSpacing: '1rem',
              bgcolor: "bg.main",
              color: 'secondary.main',
              textDecoration: 'none',
              ":hover": {color: "text.main"}
            }}
          >
            Jamz
          </Typography>

          
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/"
            sx={{
              p: 3,
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'roboto',
              fontWeight: 700,
              letterSpacing: '1rem',
              bgcolor: "bg.main",
              color: 'secondary.main',
              textDecoration: 'none',
              transition: "transitions.duration.standard",
              ":hover": {color: "text.main"}
            }}
          >
            Jamz
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;