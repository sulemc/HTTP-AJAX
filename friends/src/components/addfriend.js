import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addFriend} from '../actions';
import axios from 'axios';

class AddFriend extends Component {
    constructor(props){
        super(props);
        this.state = {
            newName: '',
            newAge: '',
            newEmail: ''
        };
        this.addFriend = this.addFriend.bind(this);
        this.updateNewName = this.updateNewName.bind(this);
        this.updateNewAge = this.updateNewAge.bind(this); 
        this.updateNewEmail = this.updateNewEmail.bind(this);
    }

    addFriend(event) {
        event.preventDefault();
        this.props.addFriend({
            name : this.state.newName,
            age: this.state.newAge,
            email: this.state.newEmail
        });
        this.setState({
            newName: '',
            newAge: '',
            newEmail: ''
        });
    }

    updateNewName(event){
        this.setState({
            newName: event.target.value,
        });
    }
    updateNewAge(event){
        this.setState({
            newAge: event.target.value,
        });
    }
    updateNewEmail(event){
        this.setState({
            newEmail: event.target.value
        });
    }

    render(){
        return (
            <div>
                <p>Add new Friend</p>
                <form onSubmit={this.addFriend}>
                    <input 
                        onChange={this.updateNewName}
                        placeholder='Friend Name'
                        value={this.state.newName}
                    />
                    <input
                        onChange={this.updateNewAge}
                        placeholder='Friend Age'
                        value={this.state.newAge}
                    />
                    <input
                        onChange={this.updateNewEmail}
                        placeholder='Friend Email'
                        value={this.state.newEmail}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default connect(null,{addFriend})(AddFriend);