import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar'
import Homepage from './Components/Homepage';
import About from './Components/About';

class App extends Component {
  // constructor(){
  //   super()
  //   this.state = {

  //   }
  // }
  render() {
    return (
      <div className="App">
        <NavBar />
        <Router>
          <Switch>
            <Route path='/'>
              <Homepage />
            </Route>
            <Route path='/videos/:id'></Route>
            <Route path='/about'>
              <About />
            </Route>
          </Switch>
        </Router>
  
      </div>
    );
  }
}

export default App;
