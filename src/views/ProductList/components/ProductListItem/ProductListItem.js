import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { ProductItem, Map } from './components';

const useStyles = makeStyles(theme => ({
  listBody: {
    paddingTop: 20
  },
  ProductItem: {
    maxHeight: 500,
    overflow: 'scroll',
  }
}));

const ProductListItem = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.listBody}>
      <Grid
        container
        spacing={2}
      >
        <Grid
          // className={classes.ProductItem}
          item
          lg={12}
          md={12}
          xs={12}
        >
          <ProductItem products={props.products} />
        </Grid>

        {/* <Grid
          item
          md={6}
          xs={12}
        >
          <Map />
        </Grid> */}
      </Grid>
    </div>
  );
};

export default ProductListItem;
