import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar'
import Homepage from './Components/Homepage';
import About from './Components/About';
import Video from './Components/Video';

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
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route path='/videos/:id' render={(props)=>(
              <Video key = {this.props.id}/>
            )}>
              
            </Route>
            <Route path='/about'>
              <About />
            </Route>
          </Switch>
        </Router>
        {/* <Homepage />
      <About /> */}
      </div>
    );
  }
}

export default App;
