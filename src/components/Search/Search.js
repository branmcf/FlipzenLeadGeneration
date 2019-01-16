import React, { Component } from 'react';
import './Search.css';
import { Button, FormGroup, Form, Input, Alert } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';


class SearchComponent extends Component {
  constructor() {
    super();

    this.state = {
        queryString: '',
        disabled: false,
        showQueryResults: false,
        queryResult: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
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
    this.setState({ showQueryResults: false })
    try {
      // let result = await axios.post('https://flipzen-api.herokuapp.com/addLead', this.state);
      let result = await axios.post('http://localhost:5000/submitQuery', this.state);
      if (result.status === 200){
        this.setState({ disabled: false })
        this.setState({ queryResult: result.data })
        this.setState({showQueryResults: true})
        console.log(result.data)
      }
    }
    catch (err) {
        console.log("ERROR")
        this.setState({ disabled: false })
    }
  }
  
//   renderQueryResults() {
//     return (
//     <div className="card">
//         <div className="card-body">
//             {this.state.queryResult}
//         </div>
//     </div>
//   )}

// renderQueryResults(){
//     const { queryResult } = this.state
//     const resultArray = Object.keys(queryResult).map(function(key) {
//         return [Number(key), queryResult[key]];
//     });

//     return(
//         <ul>
//         {resultArray.map(result =>
//           <li key={result}>
//             <a>
//             {resultArray[result]}</a>
//           </li>
//         )}
//       </ul>
// )}

renderQueryResults(){
    const { queryResult } = this.state
    return Object.keys(queryResult).map(function(obj, i) {
        return (
            <ul>
                <li>{queryResult[obj].title}</li>
                {/* name is: {queryResult[obj].name} */}
            </ul>
        )
    })
}

  render() {
    return (
      <Router>
      <div className="container-fluid" style={{padding:"0px"}}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{color: "white", height: "7vh"}}>
          <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
          <a className="navbar-brand" href="/">Flipzen</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto">
              {/* <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/search">Search</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* {this.state.showSuccessAlert && this.renderSuccessAlert()}
        {this.state.showFailureAlert && this.renderFailureAlert()} */}


        <div className="jumbotron jumbotron-fluid vertical-center" style={{height:"88vh", marginBottom:"0px"}}>
          <div className="container">
            <h1 className="display-4" style={{textAlign:"center"}}>Find the market price for anything</h1>
            {/* <p class="lead" style={{textAlign:"center"}}>Flipzen aggregates online item data to help you identify arbitrage opportunities!</p> */}
            <Form inline autoComplete="off" className="wl-form" onSubmit={this.handleSubmit} id="lead-form" style={{display: 'flex', justifyContent: 'center'}}>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                {/* <Label for="exampleEmail" className="mr-sm-2">Email</Label> */}
                <Input type="text" name="queryString" id="queryInput" placeholder="" className="wl-input" value={this.state.queryString} onChange={this.handleChange} />
              </FormGroup>
              <Button className="wl-btn" disabled={this.state.disabled}> {this.state.disabled ? 'Searching...' : 'Search'} </Button>
            </Form>
          </div>
        </div>

        {this.state.showQueryResults && this.renderQueryResults()}

        {/* Footer */}
        <div className="row" style={{background: "#e9ecef", textAlign: "center", color:"#66676F", height:"5vh", lineHeight: "5vh", maxWidth:"100vw", margin:"0px"}}>
          <div className="col-12">&copy;  2019 FlipZen, All rights reserved</div>
        </div>
      </div>

      {/* <Route exact path="/" component={App} /> */}
      </Router>




    );
  }
}

export default SearchComponent;