import React, { Component } from 'react';
import './Landing.css';
import "../../assets/css/custom-styles.css"
import { Button, FormGroup, Form, Input, Alert } from 'reactstrap';
import axios from 'axios';

class LandingComponent extends Component {
  constructor() {
    super();

    this.state = {
        email: '',
        showSuccessAlert: false,
        showFailureAlert: false,
        visible: true,
        disabled : false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  handleChange(e) {
    this.setState({ showSuccessAlert: false })
    this.setState({ showFailureAlert: false })
    let target = e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({

      [name]: value

    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    if (this.state.disabled) {
        return;
      }
    this.setState({disabled: true});
    this.setState({ showSuccessAlert: false })
    this.setState({ showFailureAlert: false })
    this.setState({ visible: true });
    try {
      // let result = await axios.post('https://flipzen-api.herokuapp.com/addLead', this.state);
      let result = await axios.post('http://localhost:5000/addLead', this.state);
      if (result.status === 200){
        this.setState({ showSuccessAlert: true })
        this.setState({ disabled: false })
      }
      document.getElementById("lead-form").reset();
    }
    catch (err) {
      this.setState({ showFailureAlert: true })
      this.setState({ disabled: false })
      document.getElementById("lead-form").reset();
    }
  }

  renderSuccessAlert() {
    return <div style={{width:"100%", position:"absolute"}}><Alert className="custom-alert" color="success" isOpen={this.state.visible} toggle={this.onDismiss}>Your contact information was submitted!</Alert></div>
  }
  
  renderFailureAlert() {
    return <div style={{width:"100%", position:"absolute"}}><Alert className="custom-alert" color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>There was an error submitting your contact information - please try again.</Alert></div>
  }

  // renderFailureAlert() {
  //   return <Alert className="custom-alert" color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>There was an error submitting your contact information - please try again.</Alert>
  // }
  render() {
    return (
      // Create react app boilerplate html
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    //   <Router>
      <div className="container-fluid" style={{padding:"0px"}}>
        <nav className="navbar navbar-expand-lg navbar-dark" style={{color: "white", height: "7vh", background:"#1d8cf8"}}>
          <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
          <a className="" href="/" style={{color:"white", fontSize:"1.5rem"}}>FlipZen</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto">
              {/* <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" href="">Sign up</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/search/dashboard">Demo</a>
              </li> */}
            </ul>
          </div>
        </nav>

        {this.state.showSuccessAlert && this.renderSuccessAlert()}
        {this.state.showFailureAlert && this.renderFailureAlert()}


        <div className="jumbotron jumbotron-fluid vertical-center landing-jumbo" style={{height:"88vh", marginBottom:"0px"}}>
          <div className="container">
            <h1 className="display-4 main-copy" style={{textAlign:"center", color:'#FFFFFF', textTransform:'uppercase', fontSize:"3.5rem"}}>Find underpriced products<br/>being sold online</h1>
            {/* <h3 className="sub-copy" style={{textAlign:"center", color:'#FFFFFF'}}>Product price analytics for buy-and-sell enterprises</h3> */}
            <h3 className="sub-copy" style={{textAlign:"center", color:'#FFFFFF'}}>We collect product price data from multiple online marketplaces into <br/>one convenient dashboard to help you find your next flip</h3>
            <Form inline autoComplete="off" className="wl-form" onSubmit={this.handleSubmit} id="lead-form" style={{display: 'flex', justifyContent: 'center'}}>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                {/* <Label for="exampleEmail" className="mr-sm-2">Email</Label> */}
                <Input type="email" name="email" id="wlEmail" placeholder="Enter your email..." className="wl-input" disabled={this.state.disabled} value={this.state.email} onChange={this.handleChange} />
              </FormGroup>
              {/* <Button className="wl-btn" disabled={this.state.disabled}> {this.state.disabled ? 'Sending...' : 'Get Started'}</Button> */}
              <Button className="wl-btn" disabled={this.state.disabled}> {this.state.disabled ? 'Sending...' : 'Join the waitlist'}</Button>
            </Form>
          </div>
        </div>
        {/* Footer */}
        <div className="row" style={{background: "#3358f4", textAlign: "center", color:"#FFFFFF", height:"5vh", lineHeight: "5vh", maxWidth:"100vw", margin:"0px"}}>
          <div className="col-12">&copy;  2019 FlipZen, All rights reserved</div>
        </div>
      {/* <Route exact path="/" component={App} /> */}
      {/* <Route path="/search" component={SearchComponent} /> */}
      </div>

    //   </Router>




    );
  }
}

export default LandingComponent;
