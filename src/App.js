// import ReactDOM from "react-dom";
// import React, { Component } from 'react';
// import { createBrowserHistory } from "history";
// import { Button, FormGroup, Form, Input, Alert } from 'reactstrap';
// import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
// // import { Router, Route, Switch, Redirect } from "react-router-dom";



// import "./assets/scss/black-dashboard-react.scss";
// import "./assets/demo/demo.css";
// import "./assets/css/nucleo-icons.css";
// import './App.css';
// import axios from 'axios';
// import AdminLayout from "./layouts/Admin/Admin.jsx";
// import RTLLayout from "./layouts/RTL/RTL.jsx";
// import SearchComponent from './components/Search/Search'
// import LandingComponent from './components/Landing/Landing'

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//         email: '',
//         showSuccessAlert: false,
//         showFailureAlert: false,
//         visible: true
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);

//     this.onDismiss = this.onDismiss.bind(this);
//   }

//   onDismiss() {
//     this.setState({ visible: false });
//   }

//   handleChange(e) {
//     this.setState({ showSuccessAlert: false })
//     this.setState({ showFailureAlert: false })
//     let target = e.target;
//     let value = target.type === 'checkbox' ? target.checked : target.value;
//     let name = target.name;

//     this.setState({

//       [name]: value

//     });
//   }

//   async handleSubmit(e) {
//     e.preventDefault();
//     this.setState({ showSuccessAlert: false })
//     this.setState({ showFailureAlert: false })
//     this.setState({ visible: true });
//     try {
//       // let result = await axios.post('https://flipzen-api.herokuapp.com/addLead', this.state);
//       let result = await axios.post('http://localhost:5000/addLead', this.state);
//       if (result.status === 200){
//         this.setState({ showSuccessAlert: true })
//       }
//       document.getElementById("lead-form").reset();
//     }
//     catch (err) {
//       this.setState({ showFailureAlert: true })
//       document.getElementById("lead-form").reset();
//     }
//   }

//   renderSuccessAlert() {
//     return <div style={{background: "black"}}><Alert className="custom-alert" color="success" isOpen={this.state.visible} toggle={this.onDismiss}>Your contact information was submitted!</Alert></div>
//   }
  
//   renderFailureAlert() {
//     return <div style={{background: "black"}}><Alert className="custom-alert" color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>There was an error submitting your contact information - please try again.</Alert></div>
//   }
//   render() {
//     const hist = createBrowserHistory();
//     return (
//       // <Router>
//       // <div className="container-fluid" style={{padding:"0px"}}>
//       //   <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{color: "white", height: "7vh"}}>
//       //     <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt=""/>
//       //     <a class="navbar-brand" href="/">Flipzen</a>
//       //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
//       //       <span class="navbar-toggler-icon"></span>
//       //     </button>
//       //     <div class="collapse navbar-collapse" id="navbarText">
//       //       <ul class="navbar-nav ml-auto">

//       //         <li class="nav-item">
//       //           <a class="nav-link" href="/search">Search</a>
//       //         </li>
//       //       </ul>
//       //     </div>
//       //   </nav>

//       //   {this.state.showSuccessAlert && this.renderSuccessAlert()}
//       //   {this.state.showFailureAlert && this.renderFailureAlert()}


//       //   <div className="jumbotron jumbotron-fluid vertical-center" style={{height:"88vh", marginBottom:"0px"}}>
//       //     <div className="container">
//       //       <h1 className="display-4" style={{textAlign:"center"}}>Data driven flipping</h1>
//       //       <p class="lead" style={{textAlign:"center"}}>Flipzen aggregates online item data to help you identify arbitrage opportunities!</p>
//       //       <Form inline autoComplete="off" className="wl-form" onSubmit={this.handleSubmit} id="lead-form" style={{display: 'flex', justifyContent: 'center'}}>
//       //         <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                
//       //           <Input type="email" name="email" id="wlEmail" placeholder="" className="wl-input" disabled={this.state.disabled} value={this.state.email} onChange={this.handleChange} />
//       //         </FormGroup>
//       //         <Button className="wl-btn" disabled={this.state.disabled}> {this.state.disabled ? 'Sending...' : 'Join the waitlist'} </Button>
//       //       </Form>
//       //     </div>
//       //   </div>
      
//       //   <div className="row" style={{background: "#e9ecef", textAlign: "center", color:"#66676F", height:"5vh", lineHeight: "5vh", maxWidth:"100vw", margin:"0px"}}>
//       //     <div className="col-12">&copy;  2019 FlipZen, All rights reserved</div>
//       //   </div>
//       // <Route exact path="/" component={App} />
//       // <Route path="/search" component={SearchComponent} />
//       // </div>
//       // <Router>
//       //   <div>
//       //   <Route exact path="/" component={LandingComponent} />
//       //   <Route path="/search" component={SearchComponent} />
//       //   </div>
//       // </Router>


//       // <Router history={hist}>
//       //   <Switch>
//       //     <Route path="/search" render={props => <AdminLayout {...props} />} />
//       //     <Route path="/rtl" render={props => <RTLLayout {...props} />} />
//       //     <Route exact path="/" component={LandingComponent} />
//       //     {/* <Redirect from="/" to="/admin/dashboard" /> */}
//       //   </Switch>
//       // </Router>


//       <div></div>



//     );
//   }
// }

// export default App;
