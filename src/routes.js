import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import { isAuthenticated } from "./services/auth";

import Login from './pages/Login';
import Home from './pages/Home';
import Create from './pages/CreateNaver';
import Edit from './pages/EditNaver';

import ModalProvider from './context/ModalContext';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
        }
    />
);

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <PrivateRoute path="/home" exact component={Home}/>
                <ModalProvider>
                   <PrivateRoute path="/create" exact component={Create}/>
                    <PrivateRoute path="/edit" exact component={Edit}/> 
                </ModalProvider>
                
            </Switch>
        </BrowserRouter>
    );
}