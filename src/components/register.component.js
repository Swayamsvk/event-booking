import React,{Component} from 'react';
import axios from 'axios';

export default class Register extends Component{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeRole = this.onChangeRole.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            username:'',
            password:'',
            role:''
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
    onChangeRole(e){
        this.setState({
            role:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const users={
            username:this.state.username,
            password:this.state.password,
            role:this.state.role

        }

        console.log(users);
        // axios.post('http://localhost:5000/user/register',users)
        // .then(res => res.data)

        // window.location = '/';
    }

    render(){
        return(
            <div>
                <div>Create User</div>
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
                        <input type="password"
                        required
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}/>
                    </div>
                    <div className="form-group">
                        <label>Role:</label>
                        <input 
                        required
                        type="text"
                        className="form-control"
                        value={this.state.role}
                        onChange={this.onChangeRole}/>
                    </div>
                    <div className="form-group">
                       <input type="submit" value="Create User Log" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}