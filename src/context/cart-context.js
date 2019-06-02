import React, { Component } from 'react';
import Axios from 'axios';

export const CartContext = React.createContext();

export class CartProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            CartItem: [],
            totalAmount: 0,
            isLogin: false
        };
        this.addToCart = this.addToCart.bind(this);
        this.login = this.login.bind(this);
    }

    addToCart(productName, productPrice) {
        let integerPrice = parseInt(productPrice, 10);
        this.setState({
            CartItem: this.state.CartItem.concat(productName),
            totalAmount: this.state.totalAmount + integerPrice
        })
    }

    searchProduct(event) {
        if(event.keyCode === 13) {
            if(event.target.value === 'dien thoai') {
                Axios.get('/dienthoai')
                .then((item) =>
                    this.setState({

                    })
                )
                console.log(event.target.value)
            }
        }
        
    }

    login () {
        this.setState({
            isLogin: true
        })
        console.log("isLogin", this.state.isLogin);
    }

    register () {
        
        console.log("registered");
    }

    render() {
        return (
            // this.props.children;
            <CartContext.Provider value={{
                CartItem: this.state.CartItem, 
                totalAmount: this.state.totalAmount, 
                addToCart: this.addToCart,
                searchProduct: this.searchProduct,
                login: this.login,
                register: this.register}}>
                {this.props.children}
            </CartContext.Provider>
        )
    }
}