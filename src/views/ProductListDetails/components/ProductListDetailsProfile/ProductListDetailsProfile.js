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
avatar: {
  height: 110,
  width: 100,
  flexShrink: 0,
  flexGrow: 0
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
      <CardContent style={{minHeight: 200}}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
            <div style={{display: 'flex'}}>
            <Avatar className={classes.avatar} alt="Remy Sharp" src={avatar.avatar1} />
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
            </Grid>
            {/* <Grid
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
            </Grid> */}
          </Grid>
        </CardContent>
    </Card>
  );
};

ProductListDetailsHeader.propTypes = {
  className: PropTypes.string
};

export default ProductListDetailsHeader;
