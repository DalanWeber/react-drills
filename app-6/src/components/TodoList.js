import React , {Component} from 'react'

class TodoList extends Component{
    constructor(props){
        super(props);

        this.state={
            inputValue: ''
        }
    }

    handleChange(value){
        this.setState({
            inputValue: value
        })
    }

    render(){
        return(
            <div>
                <input value={this.inputValue} onChange={(e) => this.handleChange(e.target.value)}/>
                <button onClick={() => this.props.addtotodo(this.state.inputValue)}>Add</button>
                <br></br>
                <h2>{this.props.tasks.map((element)=>{
                    return(
                        <li>{element}</li>
                    )
                })}</h2>
            </div>
        )
    }
}

export default TodoList