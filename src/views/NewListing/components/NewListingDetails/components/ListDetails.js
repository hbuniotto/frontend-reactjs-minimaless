import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  FormControl,
  InputLabel,
  TextField,
  Grid,
  NativeSelect,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  formControl: {
    minWidth: '100%',
    margin: 0,
    padding: 0
  },
}));

const ListDetails = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <form>
          <Grid
            container
            spacing={1}
          >
            <Grid
            style={{margin: '0 auto'}}
              item
              lg={6}
              md={6}
              xs={12}
            >
            <Typography
                className={classes.text}
                color="textSecondary"
                variant="body1"
                >
                Add the details of your listing. This is what others will see when they look for listings like yours.
            </Typography>
            </Grid>
            <Grid
            style={{margin: '0 auto'}}
              item
              md={7}
              xs={12}
            >
              <TextField
                fullWidth
                label="Title" // this will be saved in the DB
                placeholder="My cool black leather jacket"
                margin="dense"
                name="Title"
                // onChange={handleChange}
                required
                // value={values.demo1}
                variant="outlined"
              />
            </Grid>
            <Grid
              style={{margin: '0 auto'}}
              item
              md={7}
              xs={12}
            >
              <TextField
                fullWidth
                label="Brand"
                placeholder="HUGO BOSS" // THIS NEEDS TO BE BROUGHT toUppercae
                margin="dense"
                name="Brand"
                // onChange={handleChange}
                required
                // value={values.demo2}
                variant="outlined"
              />
            </Grid>
            <Grid
              style={{margin: '0 auto'}}
              item
              md={7}
              xs={12}
            >
              <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-native-helper">Size</InputLabel>
                  <NativeSelect
                  //   value={state.age}
                  // onChange={handleChange}
                  inputProps={{
                      name: 'age',
                      id: 'age-native-helper',
                  }}
                  >
                  <option aria-label="None" value="" />
                  <option value={8}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                  
                  </NativeSelect>
              </FormControl>
            </Grid>
            <Grid
              style={{margin: '0 auto'}}
              item
              md={7}
              xs={12}
              required
            >
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-helper">Condition</InputLabel>
                <NativeSelect
                //   value={state.age}
                // onChange={handleChange}
                inputProps={{
                    name: 'age',
                    id: 'age-native-helper',
                }}
                >
                <option aria-label="None" value="" />
                <option value={8}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
            </Grid>
            <Grid
              style={{margin: '0 auto'}}
              item
              md={7}
              xs={12}
            >
              <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-native-helper">Category</InputLabel>
                  <NativeSelect
                  //   value={state.age}
                  // onChange={handleChange}
                  inputProps={{
                      name: 'age',
                      id: 'age-native-helper',
                  }}
                  >
                  <option aria-label="None" value="" />
                  <option value={8}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                  </NativeSelect>
              </FormControl>
            </Grid>
            <Grid
              style={{margin: '0 auto'}}
              item
              md={7}
              xs={12}
            >
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-helper">Occasion</InputLabel>
                    <NativeSelect
                    //   value={state.age}
                    // onChange={handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-helper',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value={8}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                    </NativeSelect>
                </FormControl>
            </Grid>
            <Grid
              style={{margin: '0 auto'}}
              item
              md={7}
              xs={12}
            >
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-helper">Color</InputLabel>
                    <NativeSelect
                    //   value={state.age}
                    // onChange={handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'age-native-helper',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value={8}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                    </NativeSelect>
                </FormControl>
            </Grid>

          </Grid>
      </form>
  );
};

ListDetails.propTypes = {
  className: PropTypes.string
};

export default ListDetails;
