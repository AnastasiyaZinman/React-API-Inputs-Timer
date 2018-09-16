import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// import Timer from './Timer.js';
class User extends Component {
    render() {
      const user = this.props.userData
      return (
        <div className="person">
          <div className="name">{user.name}</div>
          <div>{user.email}</div>
        </div>
      )
    }
  }
class App extends Component {

  constructor() {
    super()
    this.state = {
      users: []
    }
  }
  async getUsers(){
      return axios 
      .get("https://jsonplaceholder.typicode.com/users")
  }
  
  async componentDidMount() {
      const response = await this.getUsers()
      console.log(response);
      this.setState({users: response.data})
  }

  render() {
    console.log(this.state.users)
     return (
      <div className="App" ad="people">
        {this.state.users.map(u => {
            return <User key={u.id} userData={u} />
        }) 
        }
        </div>
    );
  }
}
export default App;
