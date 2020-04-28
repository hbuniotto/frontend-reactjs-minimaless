import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Avatar,
  Divider,
  Typography
} from '@material-ui/core';
import '../../../../../../assets/scss/slider.scss'

import ProductDescription from './ProductDescription'
import Slider from "react-slick";
import ProductImage from './ProductImage';
import Axios from 'axios';

const useStyles = makeStyles(() => ({
  root: {},
  body: {
    marginLeft: 20,
  }
}));

const ProductItem = props => {
  const {products, className } = props;
  const classes = useStyles();

  const [listingsData, setListingData] = useState([])
  const [lodingData, setlodingData] = useState(false)

  useEffect(() => {
    Axios.get('/api/listings')
      .then(res => {
        setlodingData(true)
        setListingData(res.data.lists)
        setlodingData(false)
      }).catch(err => {
        console.log(err)
        setlodingData(false)
      })
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
