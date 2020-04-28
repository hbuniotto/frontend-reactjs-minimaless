import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Typography,
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
  // boxSizing: 'border-box',
  border: 'none',
  borderRadius: 5
}
}));

const ProductListDetailsHeader = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const product = {
    avatar1: '/images/products/product_1.png',
    avatar2: '/images/products/product_2.png',
    avatar3: '/images/products/product_3.png',
    avatar4: '/images/products/product_4.png',
    avatar5: '/images/products/product_5.png',
  };
  console.log(props.listingsData)
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      {props.listingsData.map(lists => lists._id === props.id ?  <CardContent key={lists._id}>
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
            <img className={classes.featuredImage1} src={lists.images[0].url} alt="product" />
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
                  <img className={classes.rightimg1} src={lists.images[1].url} alt="product" />
                </div>
                <div className={classes.rightimgarea}>
                  <img className={classes.rightimg1} src={lists.images[2].url} alt="product" />
                </div>
            </Grid>
            <Grid
              item
              md={6}
              xs={6}
            >
              <div className={classes.rightimgarea}>
                <img className={classes.rightimg1} src={lists.images[3].url} alt="product" />
              </div>
              <div className={classes.rightimgarea}>
                <img className={classes.rightimg1} src={lists.images[4].url} alt="product" />
              </div>
            </Grid>
            </Grid>
          </Grid>
        </CardContent> : '')}
      
    </Card>
  );
};

ProductListDetailsHeader.propTypes = {
  className: PropTypes.string
};

export default ProductListDetailsHeader;
