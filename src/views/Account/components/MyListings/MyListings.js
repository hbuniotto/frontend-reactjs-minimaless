import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Divider,
  Button,
  Grid
} from '@material-ui/core';
import { withRouter, Link } from 'react-router-dom'
import ListingContext from 'context/Listing/ListingContext';
import AuthContext from 'context/AuthContext/AuthContext';
import jwt_decode from 'jwt-decode';
import Axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {},
  details: {
    display: 'flex'
  },
  btnstyle: {
    marginLeft: 'auto',
  },
  activeInactive: {
    border: '1px solid black',
    borderRadius: 5
  },
  price: {
    textAlign: 'right',
  },
  productImg: {
    height: 80,
    width: 80,
    borderRadius: 5
  },
  productDetail: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    textAlign: 'center'
  },
  description: {
    paddingLeft: 45,
  }
}));

const AccountProfile = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const listingContext = useContext(ListingContext);
  const { getListings, listingsData, deleteAllImage, deleteList } = listingContext;

  const authContext = useContext(AuthContext);
  const { getProfile, loading, profile, stateChange, profileChange } = authContext;

  const [id, setId] = useState()
  const [alert, setAlert] = useState(false)
  
  const decoded = jwt_decode(localStorage.jwtToken);

  useEffect(() => {
    getProfile()
  }, [profileChange])

  useEffect(() => {
      getListings();
      setId()
  }, [id]);

  const handleDelete = (list) => {
    let public_id = [];
    list.images.map(image => {
      public_id.push(image.public_id)
    })

    deleteAllImage(public_id)
    deleteList(list._id)
    setId(list._id)
  }

  const product = {
    blank: '/images/products/blank.jpg'
  };

  const handleNewList = () => {
    if(profile._id) {
      props.history.push('/account/newlisting')
    } else {
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 2000)
    }
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.details}>
          <Grid container>
            <Grid item md={9} xs={12}>
            <Typography
              gutterBottom
              variant="h2"
            >
              My Listings
            </Typography>
            </Grid>  
            <Grid item md={4} xs={12}>
            <CardActions className={classes.btnstyle}>
            
            <Button
              color="primary"
              variant="contained"
              // href="/account/newlisting"
              onClick={handleNewList}
            >
              NEW LISTING
            </Button>
            </CardActions>
            </Grid>
          </Grid> 
        </div>
        {alert && <Typography color="primary">Please update your profile before new listing</Typography>}
      </CardContent>
      <Divider />

        {listingsData.map((list, i) => list.user._id === decoded.id ? <div key={list._id}>
        <Divider />
        <CardContent>     
          <Grid
            container
            className={classes.productDetail}
          >
            <Grid
              className={classes.image}
              item
              lg={1}
              md={1}
              xs={9}
            >
            <img className={classes.productImg} src={ list.images[0] ? list.images[0].url : product.blank} alt="product" />
            </Grid>
            <Grid
              className={classes.description}
              item
              md={6}
              xs={12}
            > 
              <Typography
                gutterBottom
                variant="h5"
              >
                {/* Black suit */}
                {list.title}
              </Typography>

              <Typography
                gutterBottom
                variant="h6"
                style={{textTransform: 'uppercase'}}
                color="textSecondary"
              >
                {/* HUGO BOSS */}
                {list.brand}
              </Typography>
              
              <Typography
                gutterBottom
                variant="h6"
              >
                {/* Medium | Practically New | Chic | Black */}
                {list.size}
              </Typography>
            </Grid>
            <Grid
              item
              lg={3}
              md={5}
              xs={12}
            >
            <Typography
              className={classes.price}
                gutterBottom
                variant="h4"
                color="primary"
                >${list.price} / day</Typography>
                <CardActions className={classes.btnstyle}>
                  <Link to={`/account/newlisting/edit/${list._id}`}>
                    <Button
                      // className={classes.uploadButton}
                      color="primary"
                      variant="outlined"
                    >
                      UPDATE
                    </Button>
                  </Link>
                    <Button
                      color="primary"
                  
                      // color="primary"
                      onClick={() => handleDelete(list)}
                    >
                      DELETE 
                    </Button>
                </CardActions> 
            </Grid>
          </Grid>
        </CardContent>
      </div>: '')}
      <Divider />
    </Card>
  );
};

AccountProfile.propTypes = {
  className: PropTypes.string
};

export default withRouter(AccountProfile);
             