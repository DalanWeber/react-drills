import {Component} from 'react'
import React from 'react';
import TodoList from './components/TodoList'
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      tasks: []
    }
    this.add = this.add.bind(this)
  }
  add(value){
    this.setState({
    tasks: [...this.state.tasks, value]
    })
  } 
  render(){
      return (
        <div className="App">
          <h1>My to-do list:</h1>
          <TodoList addtotodo={this.add} tasks={this.state.tasks}/>
        </div>
      );
  }
}

export default App;
