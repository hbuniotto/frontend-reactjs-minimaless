import React, { useReducer } from 'react';
import ListingContext from './ListingContext';
import ListingReducer from './ListingReducer';
import Axios from 'axios';



const LisingProvider = props => {
    const initialState = {
        lists: [],
        list: {},
        loading: false
      };

    const [state, dispatch] = useReducer(ListingReducer, initialState);

    // Get all Posts
    const getListings = async () => {
        try {
            dispatch({ type: 'SENDING_REQUEST' });
            const res = await Axios.get('/api/listings')
            const data = await res.data.lists;
            dispatch({ type: 'REQUEST_FINISHED' });
            dispatch({ type: 'GET_LISTS', payload: data });
        } catch (err) {
            console.log(err);
        }
    };

    // Add List 
    const addList = async (listData) => {
        try {
            dispatch({ type: 'SENDING_REQUEST' });
            const res = await Axios.post('/api/listings', listData)
            dispatch({ type: 'REQUEST_FINISHED' });
            dispatch({ type: 'ADD_LIST', payload: res.data })
        } catch(err) {
            console.log(err)
            dispatch({ type: 'REQUEST_FINISHED' });
        }
    } 

    // Delete List 
    const deleteList = async (id) => {
        try {
            dispatch({ type: 'SENDING_REQUEST' });
                await Axios.delete(`api/listings/${id}`)
            dispatch({ type: 'REQUEST_FINISHED' });
        } catch(err) {
            console.log(err)
            dispatch({ type: 'REQUEST_FINISHED' });
        }
    }

    // delete 5 images
    const deleteAllImage = async (public_id) => {
        try {
            dispatch({ type: 'SENDING_REQUEST' });
                await Axios.delete(`/api/deleteimage?public_id=${public_id}`)
            dispatch({ type: 'REQUEST_FINISHED' });
        } catch(err) {
            console.log(err)
        }
    }


    return (
        <ListingContext.Provider
            value={{
                listingsData: state.lists,
                loading: state.loading,
                getListings: getListings,
                deleteList: deleteList,
                deleteAllImage: deleteAllImage,
                addList: addList
            }}
        >
            {props.children}
        </ListingContext.Provider>
    );
};

export default LisingProvider;
