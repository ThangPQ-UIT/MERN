import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { CartContext } from '../context/cart-context'

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Axios from "axios";
library.add(faShoppingCart)
library.add(faSearch)

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true
    }
    this.logOut = this.logOut.bind(this);
  }

  // componentDidMount() {
  //   Axios
  //   .post('/user/login')
  //   .then(response => {
  //     console.log("res.data: ", response.data);
  //     return response
  //   })
  //   .then(res => {
  //     if (res.data.success === true) {
  //       this.setState({
  //         isLogin: true
  //       })
  //     }
  //     else {
  //       this.setState({
  //         isLogin: false
  //       })
  //     }
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  //   console.log('islogin-header: ', this.state.isLogin)
  // }
  
  logOut() {
    Axios.post('/user/logout')
    .then(res => {
      console.log("res.data.message: ", res.data.success)
      this.setState({
        isLogin: false,
        allList: res.data.message
      })
      
    })
    console.log("logged out")
  }

  render() {
    return (
    this.state.isLogin ?(
      <div className="navigation-bar">
        <div className="menu home-navbar">
          <Link to="/">Home</Link>
        </div>
        <div className="menu">
          <Link to="/phone">Phone</Link>
        </div>
        <div className="menu">
          <Link to="/laptop">Laptop</Link>
        </div>
        <div className="menu">
          <Link to="/tablet">Tablet</Link>
        </div>
        
        <CartContext.Consumer>
          {({ searchProduct }) => {
            return (
              <div className="search">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm"
                  onKeyUp={searchProduct}
                />
                <div className="search-btn">
                  <button>
                    <FontAwesomeIcon icon="search" size="1x" />
                    Search
                  </button>
                </div>
              </div>
            );
          }}
        </CartContext.Consumer>
        <CartContext.Consumer>
          {({ CartItem, totalAmount }) => {
            let rounds = "000";
            let integerTotalAmount = parseInt(totalAmount, 10);
            let hundreds = integerTotalAmount % 1000;
            let temp = Math.floor(integerTotalAmount / 1000);
            let thousands = temp % 1000;
            let millions = Math.floor(temp / 1000);
            //Đổi các hàng phần trăm, phần nghìn, phần triệu của price sang 'String' để ghép chuỗi
            let c = hundreds.toString();
            let b = thousands.toString();
            let a = millions.toString();
            //Nếu hàng trăm, nghìn và triệu bằng 0 thì đổi sang 000 cho đúng format
            if ((hundreds === 0) & (thousands !== 0)) {
              c = rounds;
            }
            if ((thousands === 0) & (millions !== 0)) {
              b = rounds;
            }
            if (b.length === 2) {
              b = "0" + b;
            }
            if (b.length === 1) {
              b = "00" + b;
            }
            if (c.length === 2) {
              c = "0" + c;
            }
            let stringTotalAmount = a + "." + b + "." + c;
            if (hundreds === 0 && thousands === 0 && millions === 0) {
              stringTotalAmount = "0";
            }
            return (
              <div className="cart">
                <div className="cart-title">
                  <FontAwesomeIcon icon="shopping-cart" size="2x" />
                </div>
                <div className="cart-detail">
                  <p>Số lượng : {CartItem.length}</p>
                  <p>Tổng tiền: {stringTotalAmount} Đ</p>
                </div>
                <div className='user'>
              <Link to="/login" onClick={this.logOut}>Logout</Link>
            </div>
              </div>
            );
          }}
        </CartContext.Consumer>
      </div>) : 
      (
        <div className="navigation-bar">
        <div className="menu home-navbar">
          <Link to="/">Home</Link>
        </div>
        <div className="menu">
          <Link to="/phone">Phone</Link>
        </div>
        <div className="menu">
          <Link to="/laptop">Laptop</Link>
        </div>
        <div className="menu">
          <Link to="/tablet">Tablet</Link>
        </div>
        
        <CartContext.Consumer>
          {({ searchProduct }) => {
            return (
              <div className="search">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm"
                  onKeyUp={searchProduct}
                />
                <div className="search-btn">
                  <button>
                    <FontAwesomeIcon icon="search" size="1x" />
                    Search
                  </button>
                </div>
              </div>
            );
          }}
        </CartContext.Consumer>
        <div className='user'>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
      )
    );
  }
}
