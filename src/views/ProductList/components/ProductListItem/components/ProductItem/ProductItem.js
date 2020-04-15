import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Avatar,
  Divider
} from '@material-ui/core';
import '../../../../../../assets/scss/slider.scss'

import ProductDescription from './ProductDescription'
import Slider from "react-slick";
import ProductImage from './ProductImage';

const useStyles = makeStyles(() => ({
  root: {},
  body: {
    marginLeft: 20,
  }
}));

const ProductItem = props => {
  const {products, className, ...rest } = props;
  const classes = useStyles();

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
      <div className={classes.body}>
          <Grid container spacing={1}>

            <Grid className={classes.item} item sm={6} xs={12}>
              <ProductImage products={products} />
            </Grid>
            <Grid className={classes.item2} item sm={6} xs={12} >
              <ProductDescription />
            </Grid>

            <Grid className={classes.item} item sm={6} xs={12}>
              <ProductImage products={products} />
            </Grid>
            <Grid className={classes.item2} item sm={6} xs={12} >
              <ProductDescription />
            </Grid>

            <Grid className={classes.item} item sm={6} xs={12}>
              <ProductImage products={products} />
            </Grid>
            <Grid className={classes.item2} item sm={6} xs={12} >
              <ProductDescription />
            </Grid>

            <Grid className={classes.item} item sm={6} xs={12}>
              <ProductImage products={products} />
            </Grid>
            <Grid className={classes.item2} item sm={6} xs={12} >
              <ProductDescription />
            </Grid>

          </Grid>
      </div>
  );
};

ProductItem.propTypes = {
  className: PropTypes.string
};

export default ProductItem;
