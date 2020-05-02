import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from 'context/AuthContext/AuthContext';

const PrivateRoute = ({ layout: Layout, component: Component, ...rest }) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated } = authContext;
    return(
        <Route
            {...rest}
            render={props =>
            isAuthenticated === true ? (
                <Layout>
                    <Component {...props} />
                </Layout>
            ) : (
                <Redirect to="/login" />
            )
            }
        />
    )
};



export default PrivateRoute;
