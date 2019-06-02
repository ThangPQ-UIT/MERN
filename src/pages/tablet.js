import React, { Component } from 'react';
import Axios from 'axios';
import { Button } from 'reactstrap';

import {CartContext} from '../context/cart-context';

export default class Tablet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabletList: []
        }
    }
    componentDidMount() {
        Axios.get('/product/tablet')
        .then(res => {
            console.log('res.data of latop: ', res.data)
            let newTabletList = res.data;
            if(newTabletList.success){
                this.setState({ 
                    isLogin: newTabletList.success,
                    tabletList: newTabletList.message
                });
            }
            if(!newTabletList.success) {
                this.setState({
                    isLogin: newTabletList.success,
                    tabletList: newTabletList.message
                })
            }
            
        })
    } 

    render() {
        return (
            <div className='row'>
            { 
                this.state.isLogin ? this.state.tabletList.map((items, index) => {
                    let words = items.productPrice.split('.');
                    let temp = words.join('');
                    let integerPrice = parseInt(temp, 10);
                    return(
                    <div className='col-md-3 product' key={index}>
                        <div className='product-img'>
                        <img src={items.productImg} alt="not display" />
                        </div>
                        <div className="detail-product">
                            <h6>{items.productName}</h6>
                            <p>Mã sản phẩm: {items.productCode} </p>				
                            <p className="price">Giá: {items.productPrice} vnđ</p>
                        </div>
                        <CartContext.Consumer>
                        {
                            function({addToCart}){ 
                            return <Button color="primary" onClick={() => addToCart(items.productName, integerPrice)}>Add to cart</Button>
                            }
                        }
                        </CartContext.Consumer>
                    </div>
                    )
                }) : <p className='alert alert-danger'>{this.state.tabletList}</p>
            }
            </div>
        )
    }
}