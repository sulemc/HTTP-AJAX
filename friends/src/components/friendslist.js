import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getFriends} from '../actions';
import axios from 'axios';

class FriendsList extends Component {
    componentDidMount(){
        this.props.getFriends();
    }

    render(){
        return (
            <div>
                <ul className='friendList'>
                    { this.props.friends.map((friend,i) => {
                        return (
                            <li className='friendItem' key={i}>
                                    <p>{`Name : ${friend.name}`}</p>
                                    <p>{`Age : ${friend.age}`}</p>
                                    <p>{`email : ${friend.email}`}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends
    };
};

export default connect (mapStateToProps, {getFriends})(FriendsList);