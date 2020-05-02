import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';

import { ProductsToolbar, ProductCard, ProductListItem } from './components';


import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  rightSide: {
    backgroundColor: 'red'
  },
  leftSide: {
    backgroundColor: 'blue'
  },

}));

const ProductList = () => {
  const classes = useStyles();

  const [products] = useState(mockData);
  return (
    <div className={classes.root}>
        <ProductsToolbar />
          <ProductListItem products={products} />

    </div>
  );
};

export default ProductList;
