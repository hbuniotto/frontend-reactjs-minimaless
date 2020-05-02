import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Avatar,
} from '@material-ui/core';
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
  const classes = useStyles();

  const {brand,description,color, category, condition, occasion, price, size, title, _id} = props.lists
  console.log(props.lists)
  return (
    <Link to={`/listings/${_id}`}>
      <br></br>
    <div className={classes.body}>
      <Typography className={classes.suit}>
        {title}
      <span className={classes.suitTitle}>{brand}</span>
      </Typography>
      <Typography className={classes.suitType}>
      <span>{size}</span> | <span>{color}</span> | <span>{condition}</span> | <span>{category}</span> | <span>{occasion}</span>
      </Typography>
      
      <div className={classes.description}>
        {description.length > 100 ? (
          <Typography>
            {description.slice(0, 100)} <span style={{color: 'blue'}}>...read more</span> 
          </Typography>
          ) : (
          <Typography>
            {description} 
          </Typography>
          ) 
        }
      </div>

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
