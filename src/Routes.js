import React, { useContext } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  // Dashboard as DashboardView,
  ProductList as ProductListView,
  ProductListDetails as ProductDetailsView,
  // UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  NewListing as NewListView,
  EditListing as EditListView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView
} from './views';
import PrivateRoute from 'common/PrivateRoute';
import AuthContext from 'context/AuthContext/AuthContext';


const Routes = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  // Check for token
  if (localStorage.jwtToken) {
    authContext.isAuthenticated = true
  } else {
    authContext.isAuthenticated = false
  }
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/listings"
      />
      {/* <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      /> */}
      {/* <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      /> */}
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/listings"
      />
      <PrivateRoute
        component={ProductDetailsView}
        exact
        layout={MainLayout}
        path="/listings/:id"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
      />
      <PrivateRoute
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <PrivateRoute
        component={NewListView}
        exact
        layout={MainLayout}
        path="/account/newlisting"
      />
      <PrivateRoute
        component={EditListView}
        exact
        layout={MainLayout}
        path="/account/newlisting/edit/:id"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/signup"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/login"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
