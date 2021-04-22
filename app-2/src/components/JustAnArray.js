import React, {Component} from 'react'

class JustAnArray extends Component{
    constructor(props){
        super(props)

        this.state={
            theArray: ['Childish Gambino', 'Macklemore', 'Eminem', 'other']
        }
    }

    render(){
        return(
            <h1>{this.state.theArray.map((element)=>{
                return(
                    <li>{element}</li>
                )
            })}</h1>
            
        )
    }
}

export default JustAnArray