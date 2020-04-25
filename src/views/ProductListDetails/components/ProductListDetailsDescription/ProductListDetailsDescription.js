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
}));

const ProductListDetailsHeader = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      {props.listingsData.map(lists => lists._id === props.id ? <CardContent style={{minHeight: 200}}>
          <Typography
              gutterBottom
              variant="h4"
            >
              DESCRIPTION
            </Typography>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              {lists.description}
            </Typography>
        </CardContent> : '' )}
    </Card>
  );
};

ProductListDetailsHeader.propTypes = {
  className: PropTypes.string
};

export default ProductListDetailsHeader;
