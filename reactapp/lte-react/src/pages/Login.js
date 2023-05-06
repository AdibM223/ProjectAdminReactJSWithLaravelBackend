// //import hook react
// import React, { useState } from 'react';

// //import hook useHitory from react router dom
// import { useLocation } from 'react-router';

// //import axios
// import axios from 'axios';

// function Login() {

//     //define state
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     //define state validation
//     const [validation, setValidation] = useState([]);

    
//     //define history
//     const history = useLocation();

//     //function "loginHanlder"
//     const loginHandler = async (e) => {
//         e.preventDefault();
        
//         //initialize formData
//         const formData = new FormData();

//         //append data to formData
//         formData.append('email', email);
//         formData.append('password', password);

        
//         //send data to server
//         await axios.post('http://127.0.0.1:8000/api/login', formData)
//         .then((response) => {
            
//                 localStorage.setItem('token', response.data.token); 
//             //set token on localStorage
            

//             //redirect to dashboard
//             history.push('/');
//         })
//         .catch((error) => {
            
//                 setValidation(error.response.data);
//         })
//     };

//     return (
//         <div className="container" style={{ marginTop: "120px" }}>
//             <div className="row justify-content-center">
//                 <div className="col-md-4">
//                     <div className="card border-0 rounded shadow-sm">
//                         <div className="card-body">
//                             <h4 className="fw-bold">HALAMAN LOGIN</h4>
//                             <hr/>
//                             {
//                                 validation.message && (
//                                     <div className="alert alert-danger">
//                                         {validation.message}
//                                     </div>
//                                 )
//                             }
//                             <form onSubmit={loginHandler}>
//                                 <div className="mb-3">
//                                     <label className="form-label">ALAMAT EMAIL</label>
//                                     <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukkan Alamat Email"/>
//                                 </div>
//                                 {
//                                     validation.email && (
//                                         <div className="alert alert-danger">
//                                             {validation.email[0]}
//                                         </div>
//                                     )
//                                 }
//                                 <div className="mb-3">
//                                     <label className="form-label">PASSWORD</label>
//                                     <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukkan Password"/>
//                                 </div>
//                                 {
//                                     validation.password && (
//                                         <div className="alert alert-danger">
//                                             {validation.password[0]}
//                                         </div>
//                                     )
//                                 }
//                                 <div className="d-grid gap-2">
//                                     <button type="submit" className="btn btn-primary">LOGIN</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )

// }

// export default Login;

import React, { Component } from "react";
// import './_style.scss';
// import AuthService from "../services/AuthService";

class Login extends Component {
  state = {
    username: '',
    password: '',
    isChecked: false
  }

  async handleFormSubmit(event) {
    event.preventDefault();
    const postData = {
      username: this.state.username,
      password: this.state.password
    }
    // const response = await AuthService.doUserLogin(postData);
    // console.log('response', response);
  }

  handleChecked() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    const { username, password, isChecked } = this.state;
    return (
      <React.Fragment>
        <div className="login-page">
          <div className="login-box">
            <div className="login-logo">
              <a href="/" onClick={(event) => { event.preventDefault() }}><b>React</b>ADMIN</a>
            </div>

            <div className="card">
              <div className="card-body login-card-body">
                <p className="login-box-msg">Sign in to start your session</p>

                <form onSubmit={(event) => this.handleFormSubmit(event)}>
                  <div className="input-group mb-3">
                    <input type="email"
                      name="name"
                      className="form-control"
                      placeholder="Email"
                      value={username}
                      onChange={event => this.setState({ username: event.target.value })} />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope"></span>
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={event => this.setState({ password: event.target.value })} />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <div className="icheck-primary">
                        <input type="checkbox" id="remember" onChange={() => this.handleChecked()} checked={isChecked} />
                        <label onClick={() => this.handleChecked()} id="remember-label">Remember Me</label>
                      </div>
                    </div>
                    <div className="col-4">
                      <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                    </div>
                  </div>
                </form>

                <p className="mb-1">
                  <a href="forgot-password.html">I forgot my password</a>
                </p>
                <p className="mb-0">
                  <a href="register.html" className="text-center">Register a new membership</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;


