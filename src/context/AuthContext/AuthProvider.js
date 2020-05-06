import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import Axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from 'common/setAuthToken';

const AuthProvider = props => {
    const initialState = {
        isAuthenticated: false,
        user: {},
        emailError: '',

        profile: '',
        loading: false,

        profileChange: 10
      };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const userAuthentication = (token) => {
        // Set token to ls
        localStorage.setItem('jwtToken', token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
      }

    const signUp = async(userData, history) => {
        try {
            const res = await Axios.post('/api/signup', userData)
            const { token } = res.data;
                userAuthentication(token)
                history.push('/listings')
        } catch(err) {
            dispatch({ type: 'GET_ERRORS', payload: err.response.data.message });
            console.log(err.response.data.message)
        }
    }

    const signIn = async(userData, history) => {
        try {
            const res = await Axios.post('/api/login', userData)
            const { token } = res.data;
                userAuthentication(token)
                history.push('/listings')
        } catch(err) {
            dispatch({ type: 'GET_ERRORS', payload: err.response.data });
            console.log(err.response.data)
        }
    }

    const getProfile = async() => {
        try {
            dispatch({ type: 'SENDING_REQUEST' });
            const res = await Axios.get('/api/profile')
            const data = await res.data;
            dispatch({ type: 'REQUEST_FINISHED' });
            dispatch({ type: 'GET_PROFILE', payload: data });
        } catch (err) {
            console.log(err);
            dispatch({ type: 'REQUEST_FINISHED' });
        }
    }

// Set logged in user
    const setCurrentUser = decoded => {
        return {
            type: 'SET_CURRENT_USER',
            payload: decoded
        };
    };

    const stateChange = (date) => {
        dispatch({ type: 'STATE_CHANGE', payload: date });
    };


    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: state.isAuthenticated,
                user: state.user,
                emailError: state.emailError,
                signUp: signUp,
                signIn: signIn,
                setCurrentUser: setCurrentUser,

                getProfile: getProfile,
                profile: state.profile,
                loading: state.loading,

                stateChange: stateChange,
                profileChange: state.profileChange
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
