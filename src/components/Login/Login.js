import React, { Component } from 'react';
// import { Button, FormGroup, Form, Input, Card, CardFooter, CardBody } from 'reactstrap';

// used for making the prop types of this component
// import PropTypes from "prop-types";

import axios from 'axios';
import '../../assets/css/login.css'

class Login extends Component {
    constructor() {
    super();

    this.state = {
        username: '',
        password: '',
        disabled: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

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
  render() {
    return (
            // <Button className="wl-btn" disabled={this.state.disabled}> {this.state.disabled ? 'Sending...' : 'Get Started'}</Button>
            <div className="container-fluid" style={{padding:"0px"}}>
                <nav className="navbar navbar-expand-lg navbar-dark" style={{color: "white", height: "7vh", background:"#FFFFFF"}}>
                    <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
                    <a className="navbar-brand" href="/" style={{color:"white", fontSize:"1.5rem"}}>Flipzen</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ml-auto">
                        {/* <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li> */}
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/search">Search</a>
                        </li> */}
                        </ul>
                    </div>
                </nav>
                {/* <div className="jumbotron jumbotron-fluid login-jumbo" style={{padding:"0px"}}>
                    <div className="container">
                        <div className="Aligner">
                            <div class="Aligner-item">
                            <Card style={{background:"#FFFFFF", height: "100%", width: "100%"}}>
                            <CardBody>
                            <h1 className="brandon-font" style={{textAlign: "center", color:"#3358f4"}}>LOGIN</h1>
                            <Form autoComplete="off" className="wl-form" onSubmit={this.handleSubmit} id="lead-form" style={{display: 'flex', justifyContent: 'center'}}>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0" style={{width:"100%"}}>
                                <Input type="email" name="email" id="wlEmail" placeholder="Email" className="login-input" disabled={this.state.disabled} value={this.state.email} onChange={this.handleChange} />
                                <Input type="password" name="email" id="wlEmail" placeholder="Password" className="login-input" disabled={this.state.disabled} value={this.state.password} onChange={this.handleChange} />
                                <br></br>
                                <Button className="wl-btn" disabled={this.state.disabled}> {this.state.disabled ? 'Logging in...' : 'Login'}</Button>
                            </FormGroup>
                            </Form>  
                            </CardBody>
                            <CardFooter style={{background: "#3358f4", textAlign:"center", color:"#FFFFFF"}}>Submit</CardFooter>
                            </Card>                              
                            </div>
                        </div>
                    </div>
                </div>      */}
                <section class="fdb-block fp-active" data-block-type="forms" data-id="1" draggable="true">
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-12 col-md-8 col-lg-7 col-md-5 text-center" style={{zIndex: "10000"}}>
                        <div class="fdb-box fdb-touch">
                          <div class="row">
                            <div class="col fr-box fr-inline" style={{zIndex: "10000"}}>
                              <div class="fr-wrapper" dir="auto">
                                <div class="fr-element fr-view" contenteditable="true" dir="auto" spellcheck="true">
                                  <h1>Login</h1>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row">
                            <div class="col mt-4 fr-box fr-inline" style={{zIndex: "10000"}}>
                              <div class="fr-wrapper" dir="auto">
                                <div class="fr-element fr-view" contenteditable="true" dir="auto" spellcheck="true">
                                  <p>
                                    <input type="text" class="form-control" placeholder="Name" value=""/>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row mt-4">
                            <div class="col fr-box fr-inline" style={{zIndex: "10000"}}>
                              <div class="fr-wrapper" dir="auto">
                                <div class="fr-element fr-view" contenteditable="true" dir="auto" spellcheck="true">
                                  <p>
                                    <input type="text" class="form-control" placeholder="Email" value=""/>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row mt-4">
                            <div class="col fr-box fr-inline" style={{zIndex: "10000"}}>
                              <div class="fr-wrapper" dir="auto">
                                <div class="fr-element fr-view" contenteditable="true" dir="auto" spellcheck="true">
                                  <p class="text-right">
                                    <a href="https://www.froala.com">Already have an account?</a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="row mt-4">
                            <div class="col fr-box" style={{zIndex: "10000"}}>
                              <div class="fr-wrapper" dir="auto">
                                <div class="fr-element fr-view" contenteditable="true" dir="auto" spellcheck="true">
                                  <p>
                                    <button class="btn btn-primary" type="button">Submit</button>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="row" style={{background: "#FFFFFF", textAlign: "center", color:"#3358f4", height:"5vh", lineHeight: "5vh", maxWidth:"100vw", margin:"0px"}}>
                    <div className="col-12">&copy;  2019 FlipZen, All rights reserved</div>
                </div>          
            </div>
            


    );
  }
}

export default Login;

/* <Form>
<FormGroup>
  <Label for="exampleEmail">Email</Label>
  <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
</FormGroup>
<FormGroup>
  <Label for="examplePassword">Password</Label>
  <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
</FormGroup>
<FormGroup>
  <Label for="exampleSelect">Select</Label>
  <Input type="select" name="select" id="exampleSelect">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </Input>
</FormGroup>
<FormGroup>
  <Label for="exampleSelectMulti">Select Multiple</Label>
  <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </Input>
</FormGroup>
<FormGroup>
  <Label for="exampleText">Text Area</Label>
  <Input type="textarea" name="text" id="exampleText" />
</FormGroup>
<FormGroup>
  <Label for="exampleFile">File</Label>
  <Input type="file" name="file" id="exampleFile" />
  <FormText color="muted">
    This is some placeholder block-level help text for the above input.
    It's a bit lighter and easily wraps to a new line.
  </FormText>
</FormGroup>
<FormGroup tag="fieldset">
  <legend>Radio Buttons</legend>
  <FormGroup check>
    <Label check>
      <Input type="radio" name="radio1" />{' '}
      Option one is this and that—be sure to include why it's great
    </Label>
  </FormGroup>
  <FormGroup check>
    <Label check>
      <Input type="radio" name="radio1" />{' '}
      Option two can be something else and selecting it will deselect option one
    </Label>
  </FormGroup>
  <FormGroup check disabled>
    <Label check>
      <Input type="radio" name="radio1" disabled />{' '}
      Option three is disabled
    </Label>
  </FormGroup>
</FormGroup>
<FormGroup check>
  <Label check>
    <Input type="checkbox" />{' '}
    Check me out
  </Label>
</FormGroup>
<Button>Submit</Button>
</Form>
);
}
} */