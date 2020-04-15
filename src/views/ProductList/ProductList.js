import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

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

      {/* <div className={classes.content}>
        <Grid
          container
          spacing={2}
        >
          {products.map(product => (
            <Grid
              item
              key={product.id}
              lg={12}
              md={12}
              xs={12}
            >
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div> */}
      {/* <div className={classes.pagination}>
        <Typography variant="caption">1-6 of 20</Typography>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div> */}

    </div>
  );
};

export default ProductList;
