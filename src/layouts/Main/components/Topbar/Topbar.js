import React, { useState, useContext } from 'react';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Hidden, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import setAuthToken from 'common/setAuthToken';
import AuthContext from 'context/AuthContext/AuthContext';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  imglogo: {
    height: 50,
    width: 100
  }
}));

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;
  const classes = useStyles();
  const [notifications] = useState([]);

  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    props.history.push('/login')
  }

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <RouterLink to="/">
          <img
          className={classes.imglogo}
            alt="Logo"
            src="/images/logos/minimaless_logo.png"
          />
        </RouterLink>
        <div className={classes.flexGrow} />
        {isAuthenticated ? (
        <Hidden mdDown>
          <IconButton
            onClick={handleLogout}
            className={classes.signOutButton}
            color="inherit"
          >
            <InputIcon />
          </IconButton>
        </Hidden>
        ) : (
          <RouterLink to="/login">
            <Button style={{color: 'white', cursor: 'pointer'}}>Sign In</Button>
          </RouterLink>
        )}
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default withRouter(Topbar);
