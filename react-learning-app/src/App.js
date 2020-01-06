import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a reat App</h1>
        <Person name="khaled" age="21" />
        <Person name="khaled2" age="221" />
        <Person name="khale3" age="23333" />

      </div>
    );

  // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi, I\'m khaled'))
  }
}

export default App;
