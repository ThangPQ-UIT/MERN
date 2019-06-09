import React, { Component } from 'react';
import Axios from 'axios';
import { Button } from 'reactstrap';
import Pagination from "react-js-pagination";

import {generalContext} from '../context/generalContext'

export default class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
          allList: [],
          isLogin: true,
          currentPage: 0,
          userId: 1,
          isLoading: false,
          activePage: 1,
          isQuickView: false
      };
      this.getData = this.getData.bind(this);
      this.handlePageChange = this.handlePageChange.bind(this);
    }

    getData(userId) {
      this.setState({
        isLoading: true
      });
      Axios.get(`/home/page${userId}`)
      .then(res => {
        if(res.data.success){
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
      this.getData(1);
    }

    render() {
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
                  let productImg = items.productImg;
                  let productName = items.productName;
                  let productPrice = items.productPrice;
                  let productCode = items.productCode;
                  return(
                    <generalContext.Consumer key={index}>
                    {
                      ({addToCart, onQuickView}) => 
                      <div className='col-md-3 product' key={index}>
                        <div className='product-img' onClick={()=>onQuickView(productImg, productName, productPrice, productCode)}>
                          <img src={productImg} alt="not display" />
                        </div>
                        <div className="detail-product">
                          <h6>{productName}</h6>			
                          <p className="price">Giá: {productPrice} vnđ</p>
                        </div>
                        <Button color="primary" onClick={() => addToCart(productName, integerPrice)}>Add to cart</Button>
                      </div>
                    }
                    </generalContext.Consumer>
                  )
                })) : <p className='alert alert-danger'>{this.state.allList}</p>
              }
            </div>
            {
              this.state.isLogin && <div className='pagination'>
              <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={8}
                totalItemsCount={36}
                pageRangeDisplayed={3}
                onChange={this.handlePageChange}
              />
            </div>
            }
          </div>
        )
    }
}