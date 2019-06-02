import React from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// import {CartContext} from '../context/cart-context'

// export default class Register extends React.Component {
//   render() {
//     return (
//         <div className='container'>
//             <div className='row register'>
//                 <div className='col-md-8'>
//                     <Form action="/home" method="POST">
//                         <FormGroup>
//                             <Label for="exampleEmail">Email</Label>
//                             <Input type="email" name="email" id="exampleEmail" />
//                         </FormGroup>
//                         <FormGroup>
//                             <Label for="examplePassword">Password</Label>
//                             <Input type="password" name="password" id="examplePassword"  />
//                         </FormGroup>
//                         <CartContext.Consumer>
//                         {
//                             ({register }) => {
//                                 return (
//                                     <div>
//                                         <Button onClick={register}>Register</Button>
//                                     </div>
//                                 )
//                             }
//                         }
//                         </CartContext.Consumer>
//                     </Form>
//                 </div>
//             </div>
//       </div>
//     );
//   }
// }

import { register } from './userFunctions'

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      errors: []
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault();
    // console.log("Registered");
    //newUser là đối tượng chứa các trường name của các input nhập vào
    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    }

    register(newUser)
    .then(res=> {
      console.log("register: ", res.data.success);
      if(res.data.success === true) {
        this.props.history.push("/login")
      }
      else {
        console.log("register errors: ", res.data.message);
        this.setState({
          errors: this.state.errors.concat(res.data.message)
        })
        this.props.history.push("/register")
      }
    })
    
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            {this.state.errors.length > 0 && (this.state.errors.map((error, index)=>
            
            {              
            return(<p key={index} className='alert alert-danger'>{error}</p>)}
            ))
            }
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your lastname name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
