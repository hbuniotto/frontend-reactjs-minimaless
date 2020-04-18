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
  leftimg: {
    textAlign: 'center'
  },
  leftimg1: {
    height: 300,
    width: '100%',
    border: '1px solid black',
    borderRadius: 10
},
rightimgbody: {
  display: 'flex'
},
rightimgarea: {
  marginRight: 10,
  marginBottom: 10,
},
rightimg1: {
  height: 140,
  width: '100%',
  boxSizing: 'border-box',
  border: '1px solid black',
  borderRadius: 5
}
}));

const ProductListDetailsHeader = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const product = {
    avatar1: '/images/products/product_1.png',
    avatar2: '/images/products/product_2.png',
    avatar3: '/images/products/product_3.png',
    avatar4: '/images/products/product_4.png',
    avatar5: '/images/products/product_5.png',
  };
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent style={{minHeight: 300}}>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
        </CardContent>
    </Card>
  );
};

ProductListDetailsHeader.propTypes = {
  className: PropTypes.string
};

export default ProductListDetailsHeader;
