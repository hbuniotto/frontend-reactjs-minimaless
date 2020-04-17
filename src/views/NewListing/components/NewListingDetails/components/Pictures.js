import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Typography,
  Button
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles(theme => ({
    root: {},
    text: {
        textAlign: 'center',
        padding: 20
    },
    input: {
        display: 'none',
    },
    uploadbtn: {
        textAlign: 'center'
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

const Pictures = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const imagearr = [1,2,3,4,5]

  const product = {
    avatar: '/images/products/product_4.png'
  };

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
                Upload pictures of your listing to impress potential renters. Be sure to star your favorite photo to featured as the primary image in the search results.
            </Typography>
            </Grid>
            <Grid
            style={{margin: '0 auto'}}
              item
              md={8}
              xs={12}
            >
                <div className={classes.uploadbtn}>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                    Upload
                    </Button>
                </label>
                </div>
            </Grid>
            <Grid
              style={{margin: '0 auto'}}
              item
              md={10}
              xs={12}
            >
                <div className={classes.image}>
                    {imagearr.map((image, i )=> (
                        <div key={i} className={classes.imageBody}>
                            <img className={classes.productImg} src={product.avatar} alt="product" />
                            <div className={classes.iconarea}>
                            <DeleteIcon style={{ fill: 'red' }} />
                            <StarIcon style={{ fill: 'yellow' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </Grid>
          </Grid>
      </div>

  );
};

Pictures.propTypes = {
  className: PropTypes.string
};

export default Pictures;
