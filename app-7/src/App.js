import React, {Component} from 'react';
import List from './component/List'
import NewTask from './component/NewTask'
import './App.css';

class App extends Component{
  constructor(props){
    super(props)

    this.state={
      todoArr: []
    }
    this.addToTodo = this.addToTodo.bind(this)
  }

  addToTodo(value){
    this.setState ({
      todoArr: [...this.state.todoArr, value]
    })
  }

  render(){
    return (
      <div className="App">
          <h1>My to-do list:</h1>
          <NewTask add={this.addToTodo}/>
          <List tasks={this.state.todoArr}/>
      </div>
    );
  }
}

export default App;
