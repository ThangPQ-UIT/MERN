import React, { Component } from 'react';
import Axios from 'axios';
import { Button } from 'reactstrap';

import {generalContext} from '../context/generalContext';

export default class Tablet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneList : [],
            isLogin: false
        }
    }

    componentDidMount() {
        Axios.get('/product/phone')
        .then(res => {
            console.log('res.data of phone: ', res.data)
            let newPhoneList = res.data;
            if(newPhoneList.success){
                this.setState({ 
                    isLogin: newPhoneList.success,
                    phoneList: newPhoneList.message
                });
            }
            if(!newPhoneList.success) {
                this.setState({
                    isLogin: newPhoneList.success,
                    phoneList: newPhoneList.message
                })
            }
            
        })
    } 

    render() {
        return (
            <div className='row'>
            { 
                this.state.isLogin ? this.state.phoneList.map((items, index) => {
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
                        <generalContext.Consumer>
                        {
                            function({addToCart}){ 
                            return <Button color="primary" onClick={() => addToCart(items.productName, integerPrice)}>Add to cart</Button>
                            }
                        }
                        </generalContext.Consumer>
                    </div>
                    )
                }) : <p className='alert alert-danger'>{this.state.phoneList}</p>
            }
            </div>
        )
    }
}