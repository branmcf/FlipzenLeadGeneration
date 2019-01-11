import React, { Component } from 'react';
import './App.css';
import { Button, FormGroup, Form, Input, Alert } from 'reactstrap';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();

    this.state = {
        email: '',
        showSuccessAlert: false,
        showFailureAlert: false,
        visible: true
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
    this.setState({ showSuccessAlert: false })
    this.setState({ showFailureAlert: false })
    this.setState({ visible: true });
    try {
      let result = await axios.post('https://flipzen-api.herokuapp.com/addLead', this.state);
      // let result = await axios.post('http://localhost:5000/addLead', this.state);
      if (result.status === 200){
        this.setState({ showSuccessAlert: true })
      }
      document.getElementById("lead-form").reset();
    }
    catch (err) {
      this.setState({ showFailureAlert: true })
      document.getElementById("lead-form").reset();
    }
  }

  renderSuccessAlert() {
    return <div style={{background: "black"}}><Alert className="custom-alert" color="success" isOpen={this.state.visible} toggle={this.onDismiss}>Your contact information was submitted!</Alert></div>
  }
  
  renderFailureAlert() {
    return <div style={{background: "black"}}><Alert className="custom-alert" color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>There was an error submitting your contact information - please try again.</Alert></div>
  }
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
      <div className="container-fluid">
        {this.state.showSuccessAlert && this.renderSuccessAlert()}
        {this.state.showFailureAlert && this.renderFailureAlert()}
        <Form inline autoComplete="off" className="wl-form" onSubmit={this.handleSubmit} id="lead-form">
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            {/* <Label for="exampleEmail" className="mr-sm-2">Email</Label> */}
            <Input type="email" name="email" id="wlEmail" placeholder="" className="wl-input" disabled={this.state.disabled} value={this.state.email} onChange={this.handleChange} />
          </FormGroup>
          <Button className="wl-btn" disabled={this.state.disabled}> {this.state.disabled ? 'Sending...' : 'Join the waitlist'} </Button>
        </Form>
      </div>




    );
  }
}

export default App;
