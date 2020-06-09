import React,{Component} from 'react';
import axios from 'axios';
import fire from '../config/fire';

export default class Register extends Component{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            username:'',
            password:'',
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

        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.username,this.state.password).then((u)=>{
            console.log(u);
        }).catch((err)=> {
            console.log(err);
        })

        // const users={
        //     username:this.state.username,
        //     password:this.state.password
        // }

        // console.log(users);
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
                       <input type="submit" value="Create User Log" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}