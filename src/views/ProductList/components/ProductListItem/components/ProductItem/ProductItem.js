import React, {useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Typography
} from '@material-ui/core';
import '../../../../../../assets/scss/slider.scss'

import ProductDescription from './ProductDescription'
import ProductImage from './ProductImage';
import ListingContext from 'context/Listing/ListingContext';

const useStyles = makeStyles(() => ({
  root: {},
  body: {
    marginLeft: 20,
  }
}));

const ProductItem = props => {
  const {products, className } = props;
  const classes = useStyles();

  const listingContext = useContext(ListingContext);
  const { getListings, listingsData, loading } = listingContext;

  useEffect(() => {
    console.log('hello')
    getListings();
  }, [])

  return (
    <div className={classes.body}>
              {listingsData.length === 0 ? <Typography variant="h4" gutterBottom>
                Oops...no listing available <span>😬</span>
                </Typography> : listingsData.map((lists, i) => (
                <Grid key={i} container spacing={1}>
                    <Grid className={classes.item} item sm={6} md={3} xs={12}>
                      <ProductImage lists={lists} products={products} />
                    </Grid>

                    <Grid className={classes.item2} item sm={6} md={9} xs={12} >
                      <ProductDescription lists={lists} />
                    </Grid>
                </Grid>
            ))}
      </div>
  );
};

ProductItem.propTypes = {
  className: PropTypes.string
};

export default ProductItem;
