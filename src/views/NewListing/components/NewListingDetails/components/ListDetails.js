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
  Typography,
  TextareaAutosize
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
const {title, brand, description, size, condition, category, occasion, color} = props.formState.values
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
                name="title"
                required
                variant="outlined"

                className={classes.textField}
                  onChange={props.handleChange}
                  type="text"
                  value={title || ''}
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
                name="brand"
                required
                variant="outlined"

                className={classes.textField}
                  onChange={props.handleChange}
                  type="text"
                  value={brand || ''}
              />
            </Grid>
            <Grid
              style={{margin: '0 auto'}}
              item
              md={7}
              xs={12}
            >
              {/* <TextField
                fullWidth
                label="Description"
                placeholder="Description"
                margin="dense"
                name="description"
                required
                variant="outlined"

                className={classes.textField}
                onChange={props.handleChange}
                type="text"
                value={description || ''}
              /> */}
              <TextField
                fullWidth
                label="Description"
                style={{width: '100%'}}
                rowsMin={10}
                aria-label="minimum height"
                placeholder="Sharing my cool leather jacket with the world"
                name="description"
                required
                variant="outlined"

                className={classes.textField}
                onChange={props.handleChange}
                type="text"
                value={description || ''}
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
                  onChange={props.handleChange}
                  value={size || ''}
                  inputProps={{
                      name: 'size',
                      id: 'age-native-helper',
                  }}
                  >
                  <option aria-label="None" value="" />
                  <option value='Extra Small'>Extra Small</option>
                  <option value='Small'>Small</option>
                  <option value='Medium'>Medium</option>
                  <option value='Large'>Large</option>
                  <option value='Extra Large'>Extra Large</option>
                  <option value='Other'>Other</option>
                  
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
                onChange={props.handleChange}
                value={condition || ''}
                inputProps={{
                    name: 'condition',
                    id: 'age-native-helper',
                }}
                >
                <option aria-label="None" value="" />
                <option value='Brand New'>Brand New</option>
                <option value='Good'>Good</option>
                <option value='Fair'>Fair</option>
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
                      onChange={props.handleChange}
                      value={category || ''}
                      inputProps={{
                          name: 'category',
                          id: 'age-native-helper',
                      }}
                  >
                  <option aria-label="None" value="" />
                  <option value='Pants & Shorts'>Pants & Shorts</option>
                  <option value='Suits & Jackets'>Suits & Jackets</option>
                  <option value='Shirts & Buttondowns'>Shirts & Buttondowns</option>
                  <option value='Shoes'>Shoes</option>
                  <option value='Accessories'>Accessories</option>
                  <option value='Other'>Other</option>
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
                      onChange={props.handleChange}
                      value={occasion || ''}
                      inputProps={{
                          name: 'occasion',
                          id: 'age-native-helper',
                      }}
                    >
                    <option aria-label="None" value="" />
                    <option value='Night Out'>Night Out</option>
                    <option value='Business'>Business</option>
                    <option value='Casual'>Casual</option>
                    <option value='Athleisure'>Athleisure</option>
                    <option value='Athleisure'>Other</option>
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
                      onChange={props.handleChange}
                      value={color || ''}
                      inputProps={{
                          name: 'color',
                          id: 'age-native-helper',
                      }}
                    >
                    <option aria-label="None" value="" />
                    <option value='Black'>Black</option>
                    <option value='White'>White</option>
                    <option value='Red'>Red</option>
                    <option value='Yellow'>Yellow</option>
                    <option value='Blue'>Blue</option>
                    <option value='Green'>Green</option>
                    <option value='Pink'>Pink</option>
                    <option value='Other'>Other</option>
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
