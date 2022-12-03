import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Button from '@mui/material/Button';
import AuthNav from './Navigation/AuthNav';
import { Container } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import UserNav from './Navigation/UserNav';
import Navigation from './Navigation/Navigation';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function ContactsAppBar(props) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <NavLink to="/">
              <IconButton
                size="large"
                edge="start"
                color="default"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <AddIcCallIcon />
              </IconButton>{' '}
            </NavLink>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Navigation />
            </Typography>
            <div>
              {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> */}
              {isLoggedIn ? <UserNav /> : <AuthNav />}
              {/* </Typography> */}
              {/* <Button color="inherit">Login</Button> */}
            </div>
          </Toolbar>
        </AppBar>
        {/* <AppBar>
          <Toolbar>
            <Typography variant="h6" component="div">
              Scroll to hide App bar
            </Typography>
          </Toolbar>
        </AppBar> */}
      </HideOnScroll>
      <Toolbar />
      <Container>
        <Outlet />
      </Container>
    </React.Fragment>
  );
}

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';

// export default function ContactsAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
