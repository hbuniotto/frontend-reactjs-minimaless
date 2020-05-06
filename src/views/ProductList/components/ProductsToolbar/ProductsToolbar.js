import React, {useContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button, Typography } from '@material-ui/core';
import { withRouter, Link } from 'react-router-dom'
import { SearchInput } from 'components';
import AuthContext from 'context/AuthContext/AuthContext';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const ProductsToolbar = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const authContext = useContext(AuthContext);
  const { getProfile, loading, profile } = authContext;

  const [alert, setAlert] = useState(false)
  
  useEffect(() => {
    getProfile()
  }, [])

  const handleNewList = () => {
    if(profile._id) {
      props.history.push('/account/newlisting')
    } else {
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
        props.history.push('/account')
      }, 2000)
    }
  }

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
        {/* <Button className={classes.importButton}>Import</Button>
        <Button 
          className={classes.exportButton}
        >
            MY STUFF 
        </Button> */}
        <Button
          color="primary"
          variant="contained"
          // href="/account/newlisting"
          onClick={handleNewList}
        >
          NEW LISTING
        </Button>
      </div>
        <div style={{textAlign: 'right'}}>
          {alert && <Typography color="primary">Please update your profile before new listing</Typography>}
        </div>
      {/* <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search product"
        />
      </div> */}
    </div>
  );
};

ProductsToolbar.propTypes = {
  className: PropTypes.string
};

export default withRouter(ProductsToolbar);
