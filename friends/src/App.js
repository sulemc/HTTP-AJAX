import React, { Component } from 'react';
import FriendsList from './components/friendslist';
import AddFriend from './components/addfriend';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">       
        <p>My Friends</p>
        <FriendsList/>
        <AddFriend/>
      </div>
    );
  }
}

export default App;
