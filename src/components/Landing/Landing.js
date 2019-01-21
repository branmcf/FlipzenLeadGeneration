import React, { Component } from 'react';
import './Landing.css';
import "../../assets/css/custom-styles.css"
import { Button, FormGroup, Form, Input, Alert } from 'reactstrap';
import axios from 'axios';
import search from '../../assets/img/search.svg'
import money from '../../assets/img/dollar-sign.svg'
import chart from '../../assets/img/bar-chart.svg'

class LandingComponent extends Component {
  constructor() {
    super();

    this.state = {
        email: '',
        showSuccessAlert: false,
        showFailureAlert: false,
        showFailureAlert2: false,
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
    this.setState({ showFailureAlert2: false })
    this.setState({ visible: true });

    if (this.state.email === '') {
      this.setState({ showFailureAlert2: true })
      this.setState({ disabled: false })
      return
    }

    try {
      let result = await axios.post('https://flipzen-api.herokuapp.com/addLead', this.state);
      // let result = await axios.post('http://localhost:5000/addLead', this.state);
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

  renderFailureAlert2() {
    return <div style={{width:"100%", position:"absolute"}}><Alert className="custom-alert" color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>Please provide an email address</Alert></div>
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
        {this.state.showFailureAlert2 && this.renderFailureAlert2()}


        <div className="jumbotron jumbotron-fluid vertical-center landing-jumbo clipped" style={{height:"80vh", marginBottom:"0px"}}>
          <div className="container">
            <h1 className="display-4 main-copy" style={{textAlign:"center", color:'#FFFFFF', textTransform:'uppercase', fontSize:"3.5rem"}}>Find underpriced products<br/>being sold online</h1>
            {/* <h3 className="sub-copy" style={{textAlign:"center", color:'#FFFFFF'}}>Product price analytics for buy-and-sell enterprises</h3> */}
            <h3 className="sub-copy" style={{textAlign:"center", color:'#FFFFFF'}}>We collect and analyze product listings from online marketplaces <br/>to create a dashboard that makes finding your next flip easy.</h3>
            <h3 className="sub-copy" style={{textAlign:"center", color:'#FFFFFF'}}>It's like Kayak – for products.</h3>
            <Form inline autoComplete="off" className="wl-form" onSubmit={this.handleSubmit} id="lead-form" style={{display: 'flex', justifyContent: 'center'}}>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                {/* <Label for="exampleEmail" className="mr-sm-2">Email</Label> */}
                <Input type="email" name="email" id="wlEmail" placeholder="Enter your email..." className="wl-input" disabled={this.state.disabled} value={this.state.email} onChange={this.handleChange} />
              </FormGroup>
              {/* <Button className="wl-btn" disabled={this.state.disabled}> {this.state.disabled ? 'Sending...' : 'Get Started'}</Button> */}
              <Button className="wl-btn" disabled={this.state.disabled}> {this.state.disabled ? 'Sending...' : 'Request access'}</Button>
            </Form>
          </div>
        </div>

        {/* <div className="jumbotron jumbotron-fluid vertical-center" style={{height:"88vh", marginBottom:"0px", background:"red"}}> */}
        <section class="fdb-block fp-active" data-block-type="features" data-id="3" draggable="true" style={{padding:"3.5rem 0"}}>
          <div class="container">
          <div class="row text-center">
            <div class="col-12">
            <h1 className="sub-copy" style={{color:"black"}}>How it works</h1>
            </div>
          </div>
            <div class="row text-center">
              <div class="col-12 col-md-8 m-auto col-lg-4">
                <div class="fdb-box fdb-touch color-black">
                  <img alt="image" class="fdb-icon" src={search}/>
                  <h2>Search</h2>
                  <p>Far far away, behind the word mountains, far from the countries.</p>
                </div>
              </div>

              <div class="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0">
                <div class="fdb-box fdb-touch color-black">
                  <img alt="image" class="fdb-icon" src={chart}/>
                  <h2>Analyze</h2>
                  <p>Separated they live in Bookmarksgrove right at the coast.</p>
                </div>
              </div>

              <div className="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0">
                <div className="fdb-box fdb-touch color-black">
                  <img alt="image" className="fdb-icon" src={money}/>
                  <h2 classname="color-black">Profit</h2>
                  <p>A small river named Duden flows by their place and supplies.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section class="fdb-block" data-block-type="testimonials" data-id="13" draggable="true">
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-12 col-md-10 col-lg-8">
                <p class="lead">
                  "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                </p>

                <p class="lead"><strong>Person Name</strong> <em class="ml-4">Co-founder at Company</em></p>
              </div>
              <div class="col-8 col-sm-6 col-md-2 col-lg-3 col-xl-2 mt-4 mt-md-0 ml-auto mr-auto mr-md-0">
                <img alt="image" class="img-fluid rounded-circle" src="https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//people/1.jpg"/>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section class="fdb-block" style={{backgroundImage:"url(https://cdn.jsdelivr.net/gh/froala/design-blocks@2.0.1/dist/imgs//shapes/8.svg);"}} data-block-type="pricings" data-id="8" draggable="true">
          <div class="container">
            <div class="row text-center">
              <div class="col">
                <h1>Pricing Plans</h1>
              </div>
            </div>

            <div class="row mt-5 align-items-center no-gutters">
              <div class="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center shadow">
                <div class="bg-white pb-5 pt-5 pl-4 pr-4 rounded-left">
                  <h2 class="font-weight-light">Basic</h2>

                  <p class="h1 mt-5 mb-5"><strong>$19</strong> <span class="h4">/month</span></p>

                  <ul class="text-left">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                  </ul>

                  <p class="text-center pt-4"><a href="https://www.froala.com" class="btn btn-outline-dark">Choose Plan</a></p>
                </div>
              </div>

              <div class="col-12 col-sm-10 col-md-8 ml-auto mr-auto col-lg-4 text-center mt-4 mt-lg-0 sl-1 pt-0 pt-lg-3 pb-0 pb-lg-3 bg-white fdb-touch rounded shadow">
                <div class="pb-5 pt-5 pl-4 pr-4">
                  <h2 class="font-weight-light">Standard</h2>

                  <p class="h1 mt-5 mb-5"><strong>$49</strong> <span class="h4">/month</span></p>

                  <ul class="text-left">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                  </ul>

                  <p class="text-center pt-4"><a href="https://www.froala.com" class="btn btn-primary btn-shadow">Choose Plan</a></p>
                </div>
              </div>

              <div class="col-12 col-sm-10 col-md-8 ml-auto mr-auto col-lg-4 text-center mt-4 mt-lg-0 shadow">
                <div class="bg-white pb-5 pt-5 pl-4 pr-4 rounded-right">
                  <h2 class="font-weight-light">OEM</h2>

                  <p class="h1 mt-5 mb-5"><strong>$99</strong> <span class="h4">/month</span></p>

                  <ul class="text-left">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                  </ul>

                  <p class="text-center pt-4"><a href="https://www.froala.com" class="btn btn-outline-dark">Choose Plan</a></p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* Footer */}
        <div className="row" style={{background: "#3358f4", textAlign: "center", color:"#FFFFFF", height:"5vh", lineHeight: "5vh", maxWidth:"100vw", margin:"0px"}}>
          <div className="col-12">&copy;  2019 FlipZen, All rights reserved</div>
        </div>
        
        {/* </div> */}

      </div>

    //   </Router>




    );
  }
}

export default LandingComponent;
