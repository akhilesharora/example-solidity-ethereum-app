import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';


var ETH_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
var storeABI = [{"constant":false,"inputs":[[null],[null]],"name":"addData","outputs":[[null]],"payable":false,"type":"function"},{"constant":true,"inputs":[[null]],"name":"dir","outputs":[[null],[null]],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getData","outputs":[[null],[null]],"payable":false,"type":"function"},{"constant":true,"inputs":[[null]],"name":"searchData","outputs":[[null],[null]],"payable":false,"type":"function"}]
var storeAddress = '0x52b3b13b66bdb03bcc1362899ab08899c3e65a9e'

var storeContract = new ETH_CLIENT.eth.Contract(storeABI, (d) => console.log(d, this))
// at(storeAddress);

class App extends Component {

  // const



  // constructor(props){
  //   super(props)
  //   this.state = {
  //     hashes: "",
  //     metas: ""
  //   }
  // }

  //   componentWillMount(){
  //   console.log(storeContract);

    // var data = storeContract.getData()
    // this.setState({
    //   hashes: String(data[0]),
    //   metas: String(data[1]) 
    // })
    
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Akhilesh Arora</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

      
    );
  }
}

export default App;
