import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  priceperday: {
    marginLeft: 'auto',
  },
  suit: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'baseline'
  },
  suittype: {
    marginLeft: 10
  }
}));

const ProductListDetailsHeader = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.details}>
          <div>
            <div className={classes.suit}>
            <Typography
              gutterBottom
              variant="h4"
            >
              Black suit
            </Typography>
            <Typography
              className={classes.suittype}
              color="textSecondary"
              variant="body2"
            >
              HUGO BOSS
            </Typography>
            </div>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              Medium | Practically New | Chic | Black
            </Typography>
          </div>
          <Typography
              className={classes.priceperday}
              color="primary"
              variant="h3"
            >
              $20 / day
            </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

ProductListDetailsHeader.propTypes = {
  className: PropTypes.string
};

export default ProductListDetailsHeader;
