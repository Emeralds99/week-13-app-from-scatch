import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import LoginPage from "./pages/loginPage"
import HomePage from "./pages/homePage"
import MyMoviesPage from "./pages/myMoviesPage"
import RecommendedPage from "./pages/recommendedPage"
import BrowsePage from "./pages/browsePage"
import { Navbar, Container, Nav } from 'react-bootstrap';
import Login from './components/login';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      login: {
        title: 'Please enter your Username and Password'
      },
      home: {
        title: 'Welcome to the ReelWeb film recommendation App!'
      },
      myMovies: {
        title: 'Your favorite Movies'
      },
      reccomended: {
        title: 'Movies we recommend'
      },
      browse: {
        title: 'Browse movies'
      }

     }
  }

  callAPI() {
    fetch('http://localhost:3001/')
    .then(res => res.text())
    .then(res => this.setState({ apiResponse: res}))
    .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <Router>
      <Container className='p-o App-header' fluid={true}>
          <Navbar className='border-bottom' bg='dark' variant='dark' expand='lg'>
              <Navbar.Brand><Link className="nav-link" to="/">FilmWeb</Link></Navbar.Brand>
              <Nav className='ml-auto'>
                  <Link className="nav-link" to="/MyMovies">
                      My Movies
                  </Link>
              </Nav>
              <Nav className='ml-auto'>
                  <Link className="nav-link" to="/Recommended">
                      Recommended
                  </Link>
              </Nav>
              <Nav className='ml-auto'>
                  <Link className="nav-link" to="/Browse">
                      Browse
                  </Link>
              </Nav>
          </Navbar>
          <Route path="/" exact render={() => (
            <LoginPage title={this.state.login.title}/> )}/>
          <Route path="/HomePage" exact render={() => (
            <HomePage title={this.state.home.title} /> )}/>
          <Route path="/MyMovies" exact render={() => (
            <MyMoviesPage title={this.state.myMovies.title} /> )}/>
          <Route path="/Recommended" exact render={() => (
            <RecommendedPage title={this.state.reccomended.title} /> )}/>
          <Route path="/Browse" exact render={() => (
            <BrowsePage title={this.state.browse.title} /> )}/>
      </Container>
  </Router>
    )}}

export default App;
