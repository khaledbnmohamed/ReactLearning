import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Mexawy', age: 21},
      { name: 'Khalod', age: 211}

    ],
    otherState: "others"
  }
  switchNameHandler = (newName) => {
    this.setState({   
      persons: [
        { name: newName, age: 28},
        { name: 'Mexawylawyy law', age: 21},
        { name: 'Khalod bodabod ', age: 211}
    ]
  })
  }

  nameChangedHandler = (event) => {
    this.setState({   
      persons: [
        { name: "MAAAAAAXXXX", age: 28},
        { name: event.target.value, age: 21},
        { name: 'Khalod bodabod ', age: 211}
    ]
  })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a reat App</h1>
        <button onClick={this.switchNameHandler.bind(this,"KhaledButton")}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,"KhaledText")}
          changed={this.nameChangedHandler} />
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />

      </div>
    );

  // return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi, I\'m khaled'))
  }
}

export default App;
