/*global chrome*/
import React, { Component } from 'react';
import $ from 'jquery';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      // uniqueCode: `ChETA${this.makeid(24)}`,
      uniqueCode: `cheta-detectme_`,
      loadingUniqueCode: false
    }
  }

  componentDidMount() {
    this.loadJquery();
  }

  loadJquery = () => {

  }

  makeid = (length) => {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

  detectUniqueCode = () => {
    this.setState({
      loadingUniqueCode: true
    })
    var inputVals = document.querySelectorAll('input');
    console.log(inputVals);
    inputVals.forEach((inputVal, i) => {
      console.log(inputVal);
    });
    this.setState({
      loadingUniqueCode: false
    })
  }

  nextTapped_det = () => {
    console.log("test");
    var config = {
      code: this.state.uniqueCode
    };
    chrome.tabs.executeScript({
      code: 'var config = ' + JSON.stringify(config)
    }, function() {
      chrome.tabs.executeScript({
        file: 'switch.js'
      });
    })

  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>ChETA</h1>
          <p>Chrome Extension for Text Analysis</p>
        </div>
        <div className="contentBox">
          <div className="no-tf-dtctd">
            <p>To start analysing a textfield, <span className="resalted">follow the steps</span>:</p>
            <p>1. <span className="resalted">Locate the field</span> you want to analyse</p>
            <p>2. Replace or <span className="resalted">add</span> anywhere on the field <span className="resalted">the following code</span>:</p>
            <p>Code: <span className="resalted">{this.state.uniqueCode}</span></p>
            <p>3. When ready, click start</p>
            { this.state.loadingUniqueCode ? <p>Loading...</p> : <a href="#" onClick={this.nextTapped_det}>Start</a> }
          </div>
        </div>
        <div className="footer">
          <a href="https://juancurti.com" target="_blank"><p>Juan Curti - 2020</p></a>
        </div>
      </div>
    )
  };
}

export default Home;
