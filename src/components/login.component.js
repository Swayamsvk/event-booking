import React,{Component} from 'react';
import axios from 'axios';

export default class Login extends Component{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            username:'',
            password:''
        }
    }

    onChangeName(e){
        this.setState({
            username:e.target.value
        })

    }

    onChangePassword(e){
        this.setState({
            password:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const user={
            username:this.state.username,
            password:this.state.password

        }

        console.log(user);
    }

    render(){
        return(
            <div>
                <div>Login</div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input 
                        required
                        type="text"
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeName}/>

                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input 
                        required
                        type="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}/>
                        
                    </div>
                    <div className="form-group">
                    <input type="submit" value="Login" className="btn btn-primary"/>    
                    </div>
                </form>
            </div>
        )
    }
}