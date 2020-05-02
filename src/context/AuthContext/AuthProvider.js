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
        emailError: ''
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

// Set logged in user
    const setCurrentUser = decoded => {
        return {
            type: 'SET_CURRENT_USER',
            payload: decoded
        };
    };


    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: state.isAuthenticated,
                user: state.user,
                emailError: state.emailError,
                signUp: signUp,
                signIn: signIn,
                setCurrentUser: setCurrentUser
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
