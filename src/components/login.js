import React, { Component } from 'react'
import { login } from './userFunctions'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: []
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  // Lấy giá trị value đã thay đổi trong input rồi setState lại
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user)
    .then(res => {
      if (res.data.success === true) {
        this.props.history.push(`/`);
        window.location.reload();

      }
      else {
        console.log("res.data.success: ", res.data.success)
        this.setState({
          errors: this.state.errors.concat(res.data.message)
        });
        this.props.history.push("/login")
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            {/* Xuat ra loi khi chua điền đẩy đủ email, pw, name... */}
            {
              this.state.errors.length > 0 && (this.state.errors.map((error, index)=>
              
              {              
              return(<p key={index} className='alert alert-danger'>{error}</p>)}
              ))
            }
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
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
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
