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
  leftimg: {
    textAlign: 'center'
  },
  leftimg1: {
    height: 300,
    width: '100%',
    border: '1px solid black',
    borderRadius: 10
},
rightimgbody: {
  display: 'flex'
},
rightimgarea: {
  marginRight: 10,
  marginBottom: 10,
},
rightimg1: {
  height: 140,
  width: '100%',
  boxSizing: 'border-box',
  border: '1px solid black',
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
            className={classes.leftimg}
              item
              md={6}
              xs={12}
            >
            <img className={classes.leftimg1} src={product.avatar1} alt="product" />
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
                  <img className={classes.rightimg1} src={product.avatar2} alt="product" />
                </div>
                <div className={classes.rightimgarea}>
                  <img className={classes.rightimg1} src={product.avatar3} alt="product" />
                </div>
            </Grid>
            <Grid
              item
              md={6}
              xs={6}
            >
              <div className={classes.rightimgarea}>
                <img className={classes.rightimg1} src={product.avatar4} alt="product" />
              </div>
              <div className={classes.rightimgarea}>
                <img className={classes.rightimg1} src={product.avatar5} alt="product" />
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
