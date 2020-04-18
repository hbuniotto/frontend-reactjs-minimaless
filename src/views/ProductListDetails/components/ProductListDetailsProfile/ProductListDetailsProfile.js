import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

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
  const avatar = {
    avatar1: '/images/avatars/avatar_1.png',
  };
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent style={{minHeight: 300}}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
            <div style={{display: 'flex'}}>
            <Avatar alt="Remy Sharp" src={avatar.avatar1} />
            <div style={{marginLeft: 15, marginBottom: 20}}>
              <Typography
                gutterBottom
                variant="h5"
              >
                Humberto
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
              >
                Miami Beach, FL
              </Typography>
              <div style={{display: 'flex'}}>
                <PhoneIcon style={{ fontSize: 15, marginRight: 10 }} />
                <Typography
                  gutterBottom
                  variant="caption"
                  display="block"
                >
                  (123) 555-1234
                </Typography>
              </div>
              <div style={{display: 'flex'}}>
                <EmailIcon style={{ fontSize: 15, marginRight: 10 }} />
                <Typography
                  gutterBottom
                  variant="caption"
                  display="block"
                >
                  humberto@email.com
                </Typography>
              </div>
            </div>
            </div>

            <div>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              You can call, text or email Humberto to arrange pick up and payment of this listing. We want to be mindful of everyone's personal time so we recommend contacting owners between 9 AM and 6 PM.
            </Typography>
            </div>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
            <Typography
              gutterBottom
              variant="h4"
            >
              Map Loading...
            </Typography>
            </Grid>
          </Grid>
        </CardContent>
    </Card>
  );
};

ProductListDetailsHeader.propTypes = {
  className: PropTypes.string
};

export default ProductListDetailsHeader;
