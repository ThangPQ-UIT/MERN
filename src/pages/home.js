import React, { Component } from 'react';
import Axios from 'axios';
import { Button } from 'reactstrap';
import Pagination from "react-js-pagination";

import {CartContext} from '../context/cart-context'

export default class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
          allList: [],
          isLogin: true,
          currentPage: 0,
          userId: 1,
          isLoading: false,
          activePage: 1
      };
      // this.logOut = this.logOut.bind(this);
      this.getData = this.getData.bind(this);
      this.handlePageChange = this.handlePageChange.bind(this);
    }

    getData(userId) {
      console.log("Start render 1");
      this.setState({
        isLoading: true
      });
      Axios.get(`/home/page${userId}`)
      .then(res => {
        if(res.data.success){
          console.log("Start render 2");
            this.setState({ 
                isLogin: res.data.success,
                allList: res.data.message,
                isLoading: false
            });
        }
        if(!res.data.success) {
            this.setState({
                isLogin: res.data.success,
                allList: res.data.message,
                isLoading: false
            })
        }
      })
    }

    handlePageChange(pageNumber) {
      console.log(`active page is ${pageNumber}`);
      this.setState({userId: pageNumber, activePage: pageNumber});
      this.getData(pageNumber);
    }

    componentDidMount() {
      console.log("componentdidmount");
      console.log("Islogin-home: ", this.state.isLogin)
      this.getData(1);
    }

    render() {
      console.log("render");
      if(this.state.isLoading){
        return(
          <p>Loading...</p>
        )
      }
        return (
          <div>
            <div className='row'>
              {
                this.state.isLogin ? (this.state.allList.map((items, index) => {
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
                )})) : <p className='alert alert-danger'>{this.state.allList}</p>}
            </div>
            {this.state.isLogin && <div className='pagination'>
            <Pagination
              activePage={this.state.activePage}
              itemsCountPerPage={8}
              totalItemsCount={36}
              pageRangeDisplayed={3}
              onChange={this.handlePageChange}
            />
            </div>}
          </div>
        )
    }
}