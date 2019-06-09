import React, { Component } from 'react';
import Axios from 'axios';

export const generalContext = React.createContext();

export class Provider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            CartItem: [],
            totalAmount: 0,
            isLogin: false,
            isQuickView: false,
            imgOfProductDetail: '',
            nameOfProductDetail: '',
            priceOfProductDetail: '',
            codeOfProductDetail: ''
        };
        this.addToCart = this.addToCart.bind(this);
        this.login = this.login.bind(this);
        this.onQuickView = this.onQuickView.bind(this);
        this.offQuickView = this.offQuickView.bind(this);
        this.disableClick = this.disableClick.bind(this);
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

    onQuickView(img, name, price, code) {
        this.setState({
            isQuickView: true,
            imgOfProductDetail: img,
            nameOfProductDetail: name,
            priceOfProductDetail: price,
            codeOfProductDetail: code
        })
        console.log(this.state.isQuickView);
    }

    disableClick() {
        this.setState({
            isQuickView: true
        })
    }

    offQuickView() {
        this.setState({
            isQuickView: false
        })
    }

    render() {
        return (
            // this.props.children;
            <generalContext.Provider value={{
                CartItem: this.state.CartItem, 
                totalAmount: this.state.totalAmount, 
                isQuickView: this.state.isQuickView,
                imgOfProductDetail: this.state.imgOfProductDetail,
                nameOfProductDetail: this.state.nameOfProductDetail,
                priceOfProductDetail: this.state.priceOfProductDetail,
                codeOfProductDetail: this.state.codeOfProductDetail,
                addToCart: this.addToCart,
                searchProduct: this.searchProduct,
                login: this.login,
                register: this.register,
                onQuickView: this.onQuickView,
                offQuickView: this.offQuickView,
                disableClick: this.disableClick}}>
                {this.props.children}
            </generalContext.Provider>
        )
    }
}