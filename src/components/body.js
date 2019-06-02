import React, { Component } from 'react';
import {Route } from "react-router-dom";

import Phone from "../pages/phone";
import Laptop from "../pages/laptop";
import Tablet from "../pages/tablet";
import Home from "../pages/home";
import Register from './register';
import Login from './login'

export default class CartProvider extends Component {

    render() {
        return (
            <div className="container">
                <div className='content-body'>
                    <Route path="/" exact component={Home} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/phone" exact component={Phone} />
                    <Route path="/laptop/" exact component={Laptop} />
                    <Route path="/tablet/" exact component={Tablet} />
                </div>
            </div>
        )
    }
}