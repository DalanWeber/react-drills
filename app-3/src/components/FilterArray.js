import React, {Component} from 'react'

class FilterArray extends Component{
    constructor(props){
        super(props)

        this.state={
            array: ['Yankees','Red Sox','Blue Jays','Rays'],
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(value){
        this.setState({
            inputValue: value
        })
    }

    ArrFilter(){
       
    }

    render(){
        let arrayToDisplay = this.state.array.filter((element,index) => {
            return element.includes(this.state.inputValue);
        }).map((element, index) => {
            return <h2 key={index}>{element}</h2>;
          });


        return(
            <div>
                <input value={this.state.inputValue} onChange={(e)=>this.handleChange(e.target.value)}/>
                <h2>{arrayToDisplay}</h2>
            </div>
        )
    }
}

export default FilterArray