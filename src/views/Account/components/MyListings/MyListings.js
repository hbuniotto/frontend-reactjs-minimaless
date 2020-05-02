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
    width: 120,
    borderRadius: 5,
    marginLeft: 10
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
    paddingLeft: 10,
  }
}));

const AccountProfile = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const listingContext = useContext(ListingContext);
  const { getListings, listingsData, deleteAllImage, deleteList } = listingContext;

const decoded = jwt_decode(localStorage.jwtToken);

  const [id, setId] = useState()
  const [user, setUser] = useState()

  useEffect(() => {
      console.log('hello')
      getListings();
      setId()
  }, [id]);
 

  const handleDelete = (list) => {
    console.log('delete my stuff list')
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

  console.log(listingsData)
  console.log(decoded)


  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.details}>
          <Grid container>
            <Grid item md={6} xs={12}>
            <Typography
              gutterBottom
              variant="h2"
            >
              My Listings
            </Typography>
            </Grid>  
            <Grid item md={6} xs={12}>
            <CardActions className={classes.btnstyle}>
            
            <Button
              color="primary"
              variant="contained"
              href="/account/newlisting"
            >
              NEW LISTING
        </Button>
        </CardActions>
            </Grid>
          </Grid> 
          
        </div>
      </CardContent>
      <Divider />
      {/* {props.listingsData.map(lists => lists._id === props.id ? */}
    {listingsData.map((list, i) => list.owner === decoded.id ? <div key={list._id}>
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
              md={6}
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
                {list.size} | {list.color} | {list.condition} | {list.category} | {list.occasion} 
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
                      variant="text"
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
             