import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import Homepage from './Components/Homepage';
import About from './Components/About';
// import Video from './Components/Video';

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
        {/* <Homepage />
      <About /> */}
      </div>
    );
  }
}

export default App;
