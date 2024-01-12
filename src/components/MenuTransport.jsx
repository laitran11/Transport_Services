import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const pages = ['Home', 'About', 'Services'];
const icons = [FacebookIcon, XIcon, LinkedInIcon];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="shipping-truck.png" alt="Flowers in Chania" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'alegreya SC',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#FC4D16',
              textDecoration: 'none',
              marginLeft: '1rem'
            }}
          >
            EXT TRANSPORT
          </Typography>
          {/*  start for mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/*  end for mobile */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'alegreya SC',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#FC4D16',
              textDecoration: 'none',
            }}
          >
            EXT TRANSPORT
          </Typography>
          <Box sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            backgroundColor: '#FC4D16',
          }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  mx: 1, color: 'white',
                  width: '170', height: '100%',
                  display: 'flex', px: 3, alignItems: 'center',
                  fontFamily: 'inika', fontSize: '18px',
                  borderRight: '1px solid white'
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{
            flexGrow: 0,
            display: { xs: 'none', md: 'flex' },
            backgroundColor: '#1E1E1E',
          }}>
            {icons.map((Icon, index) => (
              <Button

                key={index}
                onClick={handleCloseNavMenu}
                sx={{ color: 'white', height: '100%', display: 'flex', px: 5, alignItems: 'center' }}
              >
                <Icon sx={{ fontSize: 31, marginRight: 0 }} />
              </Button>
            ))}
          </Box>
          <Box sx={{
            flexGrow: 0,
            display: { xs: 'none', md: 'flex' },
          }}
          >
            <Link to="/sign_up" style={{ textDecoration: 'none' }}>
            <Button
              sx={{ color: '#FC4D16', height: '100%', fontWeight: 700, display: 'flex', px: 3, alignItems: 'center', fontFamily: 'inika', fontSize: 18 }}
            >SIGN UP</Button>
            </Link>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;