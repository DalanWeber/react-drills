import React, {Component, component} from 'react'

class Login extends Component{
    constructor(props){
        super(props)

        this.state={
            username: '',
            password: ''
        }
        this.updateUsername = this.updateUsername.bind(this)
        this.updatePassword = this.updatePassword.bind(this)
        this.login = this.login.bind(this)
    }

    updateUsername(value){
        this.setState({
            username: value
        })
    }

    updatePassword(value){
        this.setState({
            password: value
        })
    }

    login(){
        alert (`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render(){
        return(
            <div>
                <input onChange={(e) => this.updateUsername(e.target.value)} placeholder='Username'/>
                <input onChange={(e) => this.updatePassword(e.target.value)} placeholder='Password'/>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}
export default Login