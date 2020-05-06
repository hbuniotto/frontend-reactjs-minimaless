import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {  ProductListDetailsProfile, ProductListDetailsHeader, ProductListDetailsImage, ProductListDetailsDescription } from './components';
import Axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const ProductListDetails = (props) => {
  const classes = useStyles();

  const [listingsData, setListingData] = useState({})
  const [lodingData, setlodingData] = useState(false)

  useEffect(() => {
    Axios.get(`/api/listings/list/${props.match.params.id}`)
      .then(res => {
        setListingData(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])

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
          <ProductListDetailsHeader 
              listingsData={listingsData}
          />
        </Grid>
        <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
          <ProductListDetailsImage 
              listingsData={listingsData}
          />
        </Grid>
        <Grid
            item
            lg={6}
            md={6}
            xl={6}
            xs={12}
          >
          <ProductListDetailsDescription 
              listingsData={listingsData}
          />
        </Grid>
        <Grid
            item
            lg={6}
            md={6}
            xl={6}
            xs={12}
          >
          <ProductListDetailsProfile 
              listingsData={listingsData}
          />
        </Grid>
        </Grid>
      {/* ))} */}
    </div>
  );
};

export default ProductListDetails;
