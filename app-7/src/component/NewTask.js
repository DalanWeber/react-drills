import React, {Component} from 'react'

class NewTask extends Component{
    constructor(props){
        super(props)

        this.state={
            inputValue: ''
        }
        this.handleadd = this.handleadd.bind(this)
    }

    handleChange(value){
        this.setState ({
            inputValue: value
        })
    }
    
    handleadd(){
        this.props.add(this.state.inputValue)
        this.setState({
            inputValue: ''
        })
    }


    render(){
        return(
            <div>
                <input value={this.inputValue} placeholder='Task To Add' onChange={(e) => this.handleChange(e.target.value)}/>
                <button onClick={this.handleadd}>Add</button>
            </div>
        )
    }
}

export default NewTask