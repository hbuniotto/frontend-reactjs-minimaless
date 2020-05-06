import React, {useState, useEffect, useContext} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Divider,
  Button,
  TextField,
  Grid
} from '@material-ui/core';
import jwt_decode from 'jwt-decode';
import Axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import AuthContext from 'context/AuthContext/AuthContext';

const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: 'flex'
  },
  input: {
    display: 'none',
  },
  uploadbtn: {
      textAlign: 'center',
      marginLeft: theme.spacing(3)
  },
  avatar: {
    marginLeft: 15,
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  uploadPictureButton: {
    marginLeft: theme.spacing(3)
  },

  updateButton : {
    marginLeft: theme.spacing(1)
    
  }
}));

const AccountProfile = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const user = {
    name: 'Humberto Buniotto',
    city: 'Miami Beach',
    country: 'USA',
    timezone: 'GTM-5',
    avatar: '/images/avatars/avatar-demo.png'
  };

  const [userState, setUserState] = useState({
    values: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      street: '',
      city: '',
      state: '',
      zipcode: '',
      avatar: []
    },
    updateSuccess: false,
  });

  const [updateData, setUpdateData] = useState()

  const authContext = useContext(AuthContext);
  const { getProfile, loading, profile, stateChange, profileChange } = authContext;

  // console.log(profile)

  useEffect(() => {
    Axios.get('/api/profile')
    .then(res => {
      const decoded = jwt_decode(localStorage.jwtToken);
      if(res.data.email === decoded.email) {
        setUserState(userState => ({
        ...userState,
        values: {
          ...userState.values,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          phone: res.data.phone,
          email: res.data.email,
          street: res.data.address.street,
          city: res.data.address.city,
          state: res.data.address.state,
          zipcode: res.data.address.zipcode,
          avatar: res.data.avatar,
        }
      }));
      } else {
        console.log('email doesn\'t match')
      }
    }).catch(err => {
      console.log(err)
    })
  }, [profileChange])

  // console.log(profileChange)

  const handleChange = event => {
        event.persist();
    setUserState(userState =>({
      ...userState,
      values: {
        ...userState.values,
        [event.target.name]: event.target.value
      }
    }));
  };

  const handleUpdate = e => {
    const decoded = jwt_decode(localStorage.jwtToken);
    e.preventDefault();
    const userDataUpdate = {
      firstName: userState.values.firstName,
      lastName: userState.values.lastName,
      phone: userState.values.phone,
      email: decoded.email,
      street: userState.values.street,
      city: userState.values.city,
      state: userState.values.state,
      zipcode: userState.values.zipcode,
      avatar: userState.values.avatar,
    }
    // console.log(userDataUpdate)
    Axios.post('/api/profile', userDataUpdate)
    .then(res => {
      // console.log(res.data)
      setUserState(userState =>({
        ...userState,
        updateSuccess: true
      }));

      setTimeout(() => {
        setUserState(userState =>({
          ...userState,
          updateSuccess: false
        }));
      }, 2000)

      stateChange(Date.now())

    }).catch(err => {
      console.log(err)
    })
  }

  const handleImageChange = (e) => {
    // this.setState({uploading:true});
    let formData = new FormData();
    const config = {
        header: {'content-type':'multipart/form-data'}
    }
    formData.append("images",e.target.files[0]);

    Axios.post('/api/profile/avatar', formData, config)
    .then(res => {
      setUserState(userState => ({
        ...userState,
        values: {
          ...userState.values,
          avatar: [...userState.values.avatar, res.data]
        }
      }))
    }).catch(err => {
      console.log(err)
    })
 }

//  console.log(userState.values.avatar[userState.values.avatar.length - 1])

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.details}>
          <Avatar
            className={classes.avatar}
            src={userState.values.avatar && userState.values.avatar[userState.values.avatar.length - 1] ? userState.values.avatar[userState.values.avatar.length - 1].url : user.avatar}
          />
          <div className={classes.uploadbtn}>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
                onChange={handleImageChange}
            />
            <label htmlFor="contained-button-file">
                <Button  variant="outlined" color="primary" component="span">
                  UPLOAD PICTURE
                </Button>
            </label>
          </div>


        </div>
        
      </CardContent>
      <Divider />
      <CardContent>
      <form autoComplete="off" onSubmit={handleUpdate}>
        <CardContent>
          
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="First name"
                margin="dense"
                name="firstName"
                onChange={handleChange}
                required
                value={userState.values.firstName}
                variant="outlined"
                placeholder='John'
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                margin="dense"
                name="lastName"
                onChange={handleChange}
                required
                value={userState.values.lastName}
                variant="outlined"
                placeholder='Doe'
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                type="number"
                margin="dense"
                name="phone"
                onChange={handleChange}
                required
                value={userState.values.phone}
                variant="outlined"
                placeholder='(305) 555-1234'
              />
            </Grid>
            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                margin="dense"
                name="email"
                onChange={handleChange}
                required
                value={userState.values.email}
                variant="outlined"
                placeholder='you@email.com'
              />
            </Grid> */}
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Street"
                margin="dense"
                name="street"
                onChange={handleChange}
                required
                value={userState.values.street}
                variant="outlined"
                placeholder='100 Happy Street'
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="City"
                margin="dense"
                name="city"
                onChange={handleChange}
                required
                value={userState.values.city}
                variant="outlined"
                placeholder='(305) 555-1234'
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField // need to make this a dropdown with states from backend
                fullWidth
                label="State"
                margin="dense"
                name="state"
                onChange={handleChange}
                required
                value={userState.values.state}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="Zip Code"
                type="number"
                margin="dense"
                name="zipcode"
                onChange={handleChange}
                required
                value={userState.values.zipcode}
                variant="outlined"
              />
            </Grid>
            
          </Grid>
        </CardContent>
        <Divider />
        {userState.updateSuccess ? (
          <Alert severity="success">Profile updated</Alert>
        ) : ''}
        <CardActions>
          <Button
            className={classes.updateButton}
            color="primary"
            variant="outlined"
            type='submit'
            onSubmit={handleUpdate}
          >
            Update
          </Button>
        </CardActions>
      </form>
      </CardContent>
    </Card>
  );
};

AccountProfile.propTypes = {
  className: PropTypes.string
};

export default AccountProfile;
