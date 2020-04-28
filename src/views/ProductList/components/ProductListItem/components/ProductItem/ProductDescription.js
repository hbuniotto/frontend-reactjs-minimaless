import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Grid,
  Typography,
  Avatar,
} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    body: {
        curson: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%',
        flexDirection: 'column',
        marginLeft: 25
    },
    suit: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    suitTitle: {
        fontSize: 12,
        fontWeight: 'normal',
        marginLeft: 10,
        textTransform: 'uppercase'
    },
  suitType: {
    fontSize: 15,
  },
  description: {
    fontSize: 15,
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
  },
  avatarName: {
    fontSize: 15,
    marginLeft: 15
  },
  location: {
    display: 'flex',
    alignItems: 'center',
  },
  distance: {
    marginRight: 30,
    marginLeft: 10
  },
  price: {},
}));

const ProductDescription = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const {brand,description, price, size, title, _id} = props.lists
  return (
    <Link to={`/listings/${_id}`}>
      <br></br>
    <div className={classes.body}>
      <Typography className={classes.suit}>
        {title}
      <span className={classes.suitTitle}>{brand}</span>
      </Typography>
      <Typography className={classes.suitType}>
      <span>{size}</span>
      {/* <span>{size}</span> | <span>Practically New</span> | <span>Chic</span> | <span>Black</span>  */}
      </Typography>
      <Typography className={classes.description}>
        {description}
      </Typography>
      <div className={classes.avatar}>
      <Avatar alt="Remy Sharp" src="/images/avatars/humberto.jpg" />
          <Typography className={classes.avatarName}>
          Humberto
          </Typography>
      </div>
      <div className={classes.location}>
        <LocationOnIcon color="primary" />
        <span className={classes.distance}>3 miles away</span>
        <span className={classes.price}>${price} / day</span>
      </div>
    </div>
    </Link>

  );
};

ProductDescription.propTypes = {
  className: PropTypes.string
};

export default ProductDescription;
