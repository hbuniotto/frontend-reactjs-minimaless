import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import {
  Grid,
  Typography,
  TextField
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {},
    text: {
        textAlign: 'center',
        padding: 20
    },
    input: {
        display: 'none',
    },
    price: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pricetext: {
        marginLeft: 20
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    imageBody: {
        margin: 7
    },
    productImg: {
        height: 120,
        width: 150,
    },
    iconarea: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '60%',
        marginLeft: '20%'
    }
}));

const PriceList = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const {price} = props.formState.values

  return (
      <div>
          <Grid
            container
            spacing={3}
          >
              <Grid
                style={{margin: '0 auto'}}
                item
                md={6}
                xs={12}
                >
                <Typography
                    className={classes.text}
                    color="textSecondary"
                    variant="body1"
                    >
                    Set the daily rate of your listing. There is no listing fee, and renters contact you directly to arrange pickup at a location that is convenie.t to you.
                </Typography>
                </Grid>
            <Grid
            style={{margin: '0 auto'}}
              item
              md={8}
              xs={12}
            >
                <div className={classes.price}>
                <TextField
                    label="Price"
                    placeholder="20" // REFACTOR ADD $ AS PREFIX
                    type="number" // REFACTOR ONLY INTEGERS .replace(/\+|-/ig, '');
                    margin="dense"
                    name="price"
                    required
                    variant="outlined"

                    onChange={props.handleChange}
                    value={price || ''}
                />
                <Typography
                    className={classes.pricetext}
                    color="textSecondary"
                    variant="body1"
                    >
                    per day
                </Typography>
                </div>
            </Grid>

            <Grid
                style={{margin: '0 auto'}}
                item
                md={6}
                xs={12}
                >
                <Typography
                    className={classes.text}
                    color="textSecondary"
                    variant="body1"
                    >
                    Set the daily rate of your listing. 
                    There is no listing fee, and renters contact you directly to arrange pickup 
                    at a location that is convenient to you.
                </Typography>
                </Grid>
          </Grid>
      </div>

  );
};

PriceList.propTypes = {
  className: PropTypes.string
};

export default PriceList;
