import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Grid,
  Typography,
  Button,
  CircularProgress
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import StarIcon from '@material-ui/icons/Star';


import Axios from 'axios'

import '../../../../../assets/scss/slider.scss';

const useStyles = theme => ({
    root: {},
    text: {
        textAlign: 'center',
        padding: 20,
    },
    input: {
        display: 'none',
    },
    uploadbtn: {
        textAlign: 'center'
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    imageBody: {
        margin: 7
    },
    productImg: {
        height: 120,
        width: 150,
    },
    iconarea: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '60%',
        marginLeft: '20%'
    }
});

class Pictures extends Component {

    state = {
        images: [],
        formSuccess: false,

        uploadedFiles: [],
        uploading: false
    }

    handleImageChange = (e) => {
        this.setState({uploading:true});
        let formData = new FormData();
        const config = {
            header: {'content-type':'multipart/form-data'}
        }
        formData.append("file",e.target.files[0]);

        Axios.post('/api/listings/uploadimage',formData,config)
        .then(response => {
 
             this.setState({
                 uploading:false,
                 uploadedFiles:[
                     ...this.state.uploadedFiles,
                     response.data
                 ]
             },()=>{
                 this.props.imagesHandler(this.state.uploadedFiles)
             })
        });
     }

     onRemove = (id) => {
        this.setState({uploading:true});
        Axios.get(`/api/listings/removeimage?public_id=${id}`).then(response=>{
            let images = this.state.uploadedFiles.filter(item=>{
                return item.public_id !== id;
            });

            this.setState({
                uploadedFiles: images,
                uploading:false
            },()=>{
                this.props.imagesHandler(images)
            })
        })
    }
    

    classes = useStyles();

    render() {
        const { images } = this.props.formState;
        const { classes} = this.props
        console.log(this.state.uploadedFiles)
        return (
            <div>
            <Grid
              container
              spacing={3}
            >
              <Grid
              style={{margin: '0 auto'}}
              item
              md={8}
              xs={12}
              >
              <Typography
                  className={classes.text}
                  color="textSecondary"
                  variant="body1"
                  >
                  Upload pictures of your listing to impress potential renters. Be sure to star your favorite photo to featured as the primary image in the search results.
              </Typography>
              </Grid>
              <Grid
              style={{margin: '0 auto'}}
                item
                md={12}
                xs={12}
              >
                  <div className={classes.uploadbtn}>
                  <input
                      accept="image/*"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                      onChange={this.handleImageChange}
                  />
                  <label htmlFor="contained-button-file">
                      <Button variant="contained" color="primary" component="span">
                      Upload
                      </Button>
                  </label>
                  </div>
                  {images.length !== 5 ? (<Typography
                    style={{color: 'red'}}
                    className={classes.text}
                    color="textSecondary"
                    variant="body1"
                    >
                    Please Upload Your 5 Pictures.
                </Typography>) : (<Typography
                    className={classes.text}
                    style={{color: 'green'}}
                    color="textSecondary"
                    variant="body1"
                    >
                    Congratulations! 5 pictures uploaded successfully.
                </Typography>)}
                
              </Grid>
              <Grid
                style={{margin: '0 auto'}}
                item
                md={12}
                xs={12}
              >
                  
                {this.state.uploading ?  <div style={{textAlign: 'center'}}><CircularProgress /></div> : '' }               

                {this.state.uploadedFiles.length > 0 ? (
                    <div className={classes.image}>
                        {this.state.uploadedFiles.map((image, i )=> (
                            <div key={i} className={classes.imageBody}>
                                <img className={classes.productImg} src={image.url} alt="product" />
                                <div className={classes.iconarea}>
                                <DeleteIcon onClick={()=> this.onRemove(image.public_id)} style={{ fill: 'gray', cursor: 'pointer' }} />
                                <StarIcon style={{ fill: 'orange' }} /> 
                                {/* WE NEED TO CREATE A METHOD TO STAR AS FAVORITE IF ORANGE */}
                                </div>
                            </div>
                        ))}
                    </div>
                  ) : ''
                }
              </Grid>
            </Grid>
        </div>
        )
    }
}

Pictures.propTypes = {
    className: PropTypes.string
};


export default withStyles(useStyles)(Pictures)




