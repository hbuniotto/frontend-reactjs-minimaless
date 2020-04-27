import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  LinearProgress,
  TextField,
  Grid
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: 'flex'
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
    avatar: '/images/avatars/humberto.jpg'
  };

  const [values, setValues] = useState({ // will come from user model
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    state: ''
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleUpdate = e => {
    e.preventDefault();
    const update = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phone: values.phone,
      street: values.street,
      city: values.city,
      state: values.state,
      zip: values.zip
    }
    console.log(update)
  }

  // const states = [ // this will come from the backend.
  //   {
  //     value: 'alabama',
  //     label: 'Alabama'
  //   },
  //   {
  //     value: 'new-york',
  //     label: 'New York'
  //   },
  //   {
  //     value: 'san-francisco',
  //     label: 'San Francisco'
  //   }
  // ];

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.details}>
          <Avatar
            className={classes.avatar}
            src={user.avatar}
          />
          
          <div>
            <Button
          className={classes.uploadPictureButton}
          color="primary"
          variant="outlined"
        >
          UPLOAD PICTURE
        </Button>
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
                value={values.firstName}
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
                value={values.lastName}
                variant="outlined"
                placeholder='text'
                placeholder='Doe'
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                margin="dense"
                name="phone"
                onChange={handleChange}
                required
                value={values.phone}
                variant="outlined"
                placeholder='(305) 555-1234'
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                margin="dense"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
                placeholder='you@email.com'
              />
            </Grid>
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
                value={values.street}
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
                value={values.city}
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
                value={values.state}
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
                name="country"
                onChange={handleChange}
                required
                value={values.zipcode}
                variant="outlined"
              />
            </Grid>
            
          </Grid>
        </CardContent>
        <Divider />
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
