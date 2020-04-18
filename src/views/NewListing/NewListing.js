import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { NewListingDetails } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const NewListing = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={1}
      >
        <Grid
          style={{margin: '0 auto'}}
          item
          lg={8}
          md={12}
          xl={12}
          xs={12}
        >
        <NewListingDetails />
      </Grid>
      </Grid>
    </div>
  );
};

export default NewListing;
