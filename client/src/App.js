import React, { Component } from 'react';
import './App.css';

import NavigationBar from './components/navBar'
import HomePageButtons from './components/homePageButtons'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: ''}
  }

  callAPI() {
    fetch('http://localhost:9000/testAPI')
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res}))
    .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavigationBar/>
          <h1 className="App-title">Welcome to FilmWeb</h1>
          <HomePageButtons/>
        </header>
    <p className="App-intro">{this.state.apiResponse}</p>
      </div>)
  }
}

export default App;
