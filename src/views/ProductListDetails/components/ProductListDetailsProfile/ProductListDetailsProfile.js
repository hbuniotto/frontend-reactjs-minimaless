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
  const avatar = {
    avatar1: '/images/avatars/humberto.jpg',
  };

  const [userData, setUserData] = useState([]);
  const [userloading, setUserLoading] = useState(false);

  useEffect(() => {
    Axios.get('/api/profile')
    .then(res => {
      setUserLoading(true)
      const decoded = jwt_decode(localStorage.jwtToken);
      if(res.data.email === decoded.email) {
        setUserData(res.data);
        setUserLoading(false)
      } else {
        console.log('email doesn\'t match')
        setUserLoading(false)
      }
    }).catch(err => {
      console.log(err)
      setUserLoading(false)
    })
  }, [])

  // console.log(userData.address)
  console.log(userloading)
  const user = {
    name: 'Humberto Buniotto',
    city: 'Miami Beach',
    country: 'USA',
    timezone: 'GTM-5',
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
            <Avatar className={classes.avatar} alt="Remy Sharp" src={userData.avatar && userData.avatar[userData.avatar.length - 1] ? userData.avatar[userData.avatar.length - 1].url : user.avatar} />
            <div style={{marginLeft: 15, marginBottom: 20}}>
              <Typography
                gutterBottom
                variant="h5"
              >
                {/* Humberto */}
                {userData.firstName}
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
              >
                {/* Miami Beach, FL */}
                {userData.address ? userData.address.city : 'City'}, {userData.address ? userData.address.state : 'State'}
              </Typography>
              <div style={{display: 'flex'}}>
                <PhoneIcon style={{ fontSize: 15, marginRight: 10 }} />
                <Typography
                  gutterBottom
                  variant="caption"
                  display="block"
                >
                  {/* (123) 555-1234 */}
                  {userData.phone ? userData.phone : 'Phone Number'}
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
                  {userData.email ? userData.email : 'Email'}
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
