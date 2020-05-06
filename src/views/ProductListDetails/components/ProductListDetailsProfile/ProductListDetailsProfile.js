import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import jwt_decode from 'jwt-decode';
import Axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {},
avatar: {
  height: 110,
  width: 100,
  flexShrink: 0,
  flexGrow: 0
}
  
}));

const ProductListDetailsHeader = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const {profile} = props.listingsData

  const user = {
    avatar: '/images/avatars/avatar-demo.png'
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent style={{minHeight: 200}}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
            <div style={{display: 'flex'}}>
            <Avatar className={classes.avatar} alt="Remy Sharp" src={profile && profile.avatar[profile.avatar.length - 1] ? profile.avatar[profile.avatar.length - 1].url : user.avatar} />
            <div style={{marginLeft: 15, marginBottom: 20}}>
              <Typography
                gutterBottom
                variant="h5"
              >
                {/* Humberto */}
                {profile ? profile.firstName : 'First Name'}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
              >
                {profile ? profile.address.city : 'City'}, {profile ? profile.address.state : 'State'}
              </Typography>
              <div style={{display: 'flex'}}>
                <PhoneIcon style={{ fontSize: 15, marginRight: 10 }} />
                <Typography
                  gutterBottom
                  variant="caption"
                  display="block"
                >
                  {/* (123) 555-1234 */}
                  {profile ? profile.phone : 'Phone'}
                </Typography>
              </div>
              <div style={{display: 'flex'}}>
                <EmailIcon style={{ fontSize: 15, marginRight: 10 }} />
                <Typography
                  gutterBottom
                  variant="caption"
                  display="block"
                >
                  {/* humberto@email.com */}
                  {profile ? profile.email : 'Email'}
                </Typography>
              </div>
            </div>
            </div>
            </Grid>
            {/* <Grid
              item
              md={6}
              xs={12}
            >
            <Typography
              gutterBottom
              variant="h4"
            >
              Map Loading...
            </Typography>
            </Grid> */}
          </Grid>
        </CardContent>
    </Card>
  );
};

ProductListDetailsHeader.propTypes = {
  className: PropTypes.string
};

export default ProductListDetailsHeader;
