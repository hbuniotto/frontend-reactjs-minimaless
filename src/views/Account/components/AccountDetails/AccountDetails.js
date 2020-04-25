
// NEED TO ADD MY LISTINGS HERE
// WON'T USE THIS PART

import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));  

const AccountDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({ // will come from user model
    demo1: '',
    demo2: ''
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleUpdate = e => {
    e.preventDefault();
    const paymentInfo = {
      demo1: values.demo1,
      demo2: values.demo2,
    }
    console.log(paymentInfo)
  }

  const states = [ // this will come from the backend.
    {
      value: 'alabama',
      label: 'Alabama'
    },
    {
      value: 'new-york',
      label: 'New York'
    },
    {
      value: 'san-francisco',
      label: 'San Francisco'
    }
  ];

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        // noValidate
        onSubmit={handleUpdate}
      >
            <CardContent>
        <div className={classes.details}>
          <div>
            <Typography
              gutterBottom
              variant="h2"
            >
              Payment Information
            </Typography>    
          </div>
        </div>
      </CardContent>
        <Divider />
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
                label="Demo1"
                margin="dense"
                name="demo1"
                onChange={handleChange}
                required
                // value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Demo2"
                margin="dense"
                name="demo2"
                onChange={handleChange}
                required
                // value={values.lastName}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardContent>
        <Typography
          className={classes.locationText}
          color="textSecondary"
          variant="body1"
        >
          Your payment information will only be shared with the renter of your items once the transaction has been confirmed.
        </Typography>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            className={classes.uploadButton}
            color="primary"
            variant="outlined"
            type='submit'
            onSubmit={handleUpdate}
          >
            Update
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string
};

export default AccountDetails;
