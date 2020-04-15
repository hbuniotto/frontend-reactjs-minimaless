import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import '../../../../../../assets/scss/slider.scss'

import Slider from "react-slick";

const useStyles = makeStyles(() => ({
  root: {},
  body: {
    marginLeft: 20,
  }
}));

const ProductImage = props => {
  const {products, className, ...rest } = props;
  const classes = useStyles();

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (

    <Slider {...settings} className="slider">
        {products.map(product => (
        <img className="sliderImage" alt="Remy Sharp" src={product.imageUrl} />
        ))}
    </Slider>

  );
};

ProductImage.propTypes = {
  className: PropTypes.string
};

export default ProductImage;
