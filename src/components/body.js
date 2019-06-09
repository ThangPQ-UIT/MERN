import React, { Component } from 'react';
import {Route } from "react-router-dom";

import {generalContext} from '../context/generalContext'

import Phone from "../pages/phone";
import Laptop from "../pages/laptop";
import Tablet from "../pages/tablet";
import Home from "../pages/home";
import Register from './register';
import Login from './login'

export default class CartProvider extends Component {
    render() {
        return (
            <div className='container-fluid'>
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
                <generalContext.Consumer>
                {
                    ({isQuickView, offQuickView, 
                    imgOfProductDetail, nameOfProductDetail, 
                    priceOfProductDetail, codeOfProductDetail, disableClick}) =>
                    {
                        if(isQuickView) {
                            return(
                                <div className='quick-view'>
                                    <div className='quick_view-detail'>
                                        <div className='img-quick_view'>
                                            <img src={imgOfProductDetail} alt='' />
                                        </div>
                                        <div className='name-quick_view'>
                                            <p>{nameOfProductDetail}</p>
                                            <p id='code-quick_view'>Mã sản phẩm: {codeOfProductDetail} </p>	
                                        </div>
                                        <div className='price-quick_view'>
                                            <p>Giá: {priceOfProductDetail}</p>
                                        </div>
                                        <div className='off-quick_view'>
                                            <button className='btn btn-danger' onClick={offQuickView}>X</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                }
                </generalContext.Consumer>
            </div>
        )
    }
}