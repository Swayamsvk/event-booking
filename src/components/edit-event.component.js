import React,{Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditEvent extends Component{
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
            date: new Date(),
            time: '',
            price: 0,
            place: ''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/events/'+this.props.match.params.id)
        .then(response => {
            this.setState({
                name:response.data.name,
                date:new Date(response.data.date),
                time:response.data.time,
                price:response.data.price,
                place:response.data.place
            })
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    onChangeName(e){
        this.setState({
            name:e.target.value
        })
    }
    
    onChangeDate(date){
        this.setState({
            date: date
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

        
        axios.post('http://localhost:5000/events/update/'+this.props.match.params.id,events)
        .then(res => console.log(res.data))

        window.location ='/';
    }



    render(){
        return(
            <div>
                <h3>Edit Event Log</h3>
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
                    <div>
                    <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}/>
                    </div>
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
                    <input type="submit" value="Edit Event Log" className="btn btn-primary"/>
                </div>

                </form>
            </div>
            
        )
    }
}