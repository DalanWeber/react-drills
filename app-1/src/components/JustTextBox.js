import React, {Component} from 'react'

class JustTextBox extends Component{
    constructor(props){
        super(props)

        this.state={
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(val){
        this.setState({
            inputValue: val,
        })
    }

    render(){
        return(
            <div>
                <input onChange={(e)=>this.handleChange(e.target.value)}/>
                <br></br>
                <h2>My text input will go here:{this.state.inputValue}</h2>
            </div>
        )
    }
}

export default JustTextBox