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
      justifyContent: 'flex-start',
      height: '100%',
      flexDirection: 'column',
      marginLeft: 25,
      marginTop: -7,
      // backgroundColor: 'red'
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
    marginTop: 15,
    marginBottom: 15
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
    // marginLeft: 10,
  },
  price: {},
}));

const ProductDescription = props => {
  const classes = useStyles();

  const {brand,description,profile, color, category, condition, occasion, price, size, title, _id} = props.lists

  const user = {
    avatar: '/images/avatars/avatar-demo.png'
  };

  // console.log(profile)

  return (
    <Link to={`/listings/${_id}`}>
      <br></br>
    <div className={classes.body}>
      <Typography className={classes.suit}>
        {title}
      <span className={classes.suitTitle}>{brand}</span>
      </Typography>
      <Typography className={classes.suitType}>
      <span>{size}</span> | <span>{color}</span> | <span>{category}</span> | <span>{condition}</span> | <span>{occasion}</span>
      {/* <span>{size}</span> | <span>Practically New</span> | <span>Chic</span> | <span>Black</span>  */}
      </Typography>
      
      <div className={classes.description}>
        {description.length > 150 ? (
          <Typography>
            {description.slice(0, 150)} <span style={{color: 'blue'}}>...read more</span> 
          </Typography>
          ) : (
          <Typography>
            {description} 
          </Typography>
          ) 
        }
      </div>

      <div className={classes.avatar}>
      <Avatar alt="Remy Sharp" src={profile && profile.avatar && profile.avatar.length > 0 ? profile.avatar[profile.avatar.length - 1].url : user.avatar} />
          <Typography className={classes.avatarName}>
          {/* Humberto */}
          {profile ? profile.firstName : 'First Name'}
          </Typography>
      </div>
      <div className={classes.location}>
        {/* <LocationOnIcon color="primary" />  */}
        <span className={classes.distance}>
          {profile && profile.address ? profile.address.city : 'City'}, {profile && profile.address ? profile.address.state : 'State'}
        </span>
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
