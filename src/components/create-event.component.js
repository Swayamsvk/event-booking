import React,{Component} from 'react';
import axios from 'axios';

export default class CreateEvent extends Component{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangePlace = this.onChangePlace.bind(this);
        this.onSubmit = this.onSubmit.bind(this);




        this.state={
            name: '',
            date: '',
            time: '',
            price: 0,
            place: ''
        }
    }

    onChangeName(e){
        this.setState({
            name:e.target.value
        })
    }
    
    onChangeDate(e){
        this.setState({
            date: e.target.value
        })
    }

    onChangeTime(e){
        this.setState({
            time: e.target.value
        })
    }

    onChangePrice(e){
        this.setState({
            price:e.target.value
        })
    }

    onChangePlace(e){
        this.setState({
            place:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const events ={
            name:this.state.name,
            date:this.state.date,
            time:this.state.time,
            price:this.state.price,
            place:this.state.place
        }

        
        axios.post('http://localhost:5000/events/add',events)
        .then(res => console.log(res.data))

        window.location ='/';
    }



    render(){
        return(
            <div>
                <h3>Create New Event Log</h3>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text"
                    required
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onChangeName}/>
                </div>
                <div className="form-group">
                    <label>Date:</label>
                    <input type="text"
                    required
                    className="form-control"
                    value={this.state.date}
                    onChange={this.onChangeDate}/>
                </div>
                <div className="form-group">
                    <label>Time:</label>
                    <input type="text"
                    required
                    className="form-control"
                    value={this.state.time}
                    onChange={this.onChangeTime}/>
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input type="text"
                    required
                    className="form-control"
                    value={this.state.price}
                    onChange={this.onChangePrice}/>
                </div>
                <div className="form-group">
                    <label>Place:</label>
                    <input type="text"
                    required
                    className="form-control"
                    value={this.state.place}
                    onChange={this.onChangePlace}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Event Log" className="btn btn-primary"/>
                </div>

                </form>
            </div>
            
        )
    }
}