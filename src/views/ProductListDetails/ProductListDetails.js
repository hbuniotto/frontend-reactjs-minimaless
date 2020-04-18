import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {  ProductListDetailsProfile, ProductListDetailsHeader, ProductListDetailsImage, ProductListDetailsDescription } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const ProductListDetails = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
        <ProductListDetailsHeader />
      </Grid>
      <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
        <ProductListDetailsImage />
      </Grid>
      <Grid
          item
          lg={6}
          md={6}
          xl={6}
          xs={12}
        >
        <ProductListDetailsDescription />
      </Grid>
      <Grid
          item
          lg={6}
          md={6}
          xl={6}
          xs={12}
        >
        <ProductListDetailsProfile />
      </Grid>
      </Grid>
    </div>
  );
};

export default ProductListDetails;
