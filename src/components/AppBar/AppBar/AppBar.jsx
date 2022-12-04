import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import AuthNav from '../AuthNav/AuthNav';
import { Container } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import UserNav from '../UserNav/UserNav';
import Navigation from '../Navigation/Navigation';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

function HideOnScroll(props) {
  const { children, window } = props;
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
              {isLoggedIn ? (
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <UserNav />
                </Typography>
              ) : (
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  <AuthNav />
                </Typography>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </React.Suspense>
      </Container>
    </React.Fragment>
  );
}
