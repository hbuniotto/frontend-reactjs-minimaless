import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  featuredImage: {
    textAlign: 'center',
    height: 320,
  },
  featuredImage1: {
    height: 320,
    width: '100%',
    border: 'none',
    borderRadius: 5,
    marginBottom: 10,
},
rightimgbody: {
  display: 'flex'
},
rightimgarea: {
  marginRight: 10,
  marginBottom: 10,
},
rightimg1: {
  height: 152,
  width: '100%',
  border: 'none',
  borderRadius: 5
}
}));

// src={profile && profile.avatar && profile.avatar.length > 0 ? profile.avatar[profile.avatar.length - 1].url : user.avatar}
// src={ images && images.length > 0 ? images[0].url : product.blank}

const ProductListDetailsHeader = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const product = {
    blank: '/images/products/blank.jpg'
  };
  const { images } = props.listingsData
  console.log(props.listingsData.images && props.listingsData.images[0].url)
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
            className={classes.featuredImage}
              item
              md={6}
              xs={12}
            >
            <img className={classes.featuredImage1} src={ props.listingsData.images && props.listingsData.images[0].url ? props.listingsData.images[0].url : product.blank} alt="product" />
            </Grid>
            <Grid
              className={classes.rightimgbody}
              item
              md={6}
              xs={12}
            >
              <Grid
              item
              md={6}
              xs={6}
            >
                <div className={classes.rightimgarea}>
                  <img className={classes.rightimg1} src={ props.listingsData.images && props.listingsData.images[1].url ? props.listingsData.images[1].url : product.blank} alt="product" />
                </div>
                <div className={classes.rightimgarea}>
                  <img className={classes.rightimg1} src={ props.listingsData.images && props.listingsData.images[2] && props.listingsData.images[2].url ? props.listingsData.images[2].url : product.blank} alt="product" />
                </div>
            </Grid>
            <Grid
              item
              md={6}
              xs={6}
            >
              <div className={classes.rightimgarea}>
                <img className={classes.rightimg1} src={ props.listingsData.images && props.listingsData.images[3] && props.listingsData.images[3].url ? props.listingsData.images[3].url : product.blank} alt="product" />
              </div>
              <div className={classes.rightimgarea}>
                <img className={classes.rightimg1} src={ props.listingsData.images && props.listingsData.images[4] && props.listingsData.images[4].url ? props.listingsData.images[4].url : product.blank} alt="product" />
              </div>
            </Grid>
            </Grid>
          </Grid>
        </CardContent>
    </Card>
  );
};

ProductListDetailsHeader.propTypes = {
  className: PropTypes.string
};

export default ProductListDetailsHeader;
