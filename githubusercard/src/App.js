import React from 'react';
import axios from 'axios';
import User from './components/user';
import Follower from './components/follower';



import './App.css';

class App extends React.Component {
  
  state = {
    user: [],
    };

  componentDidMount(){
    axios
    .get('https://api.github.com/users/hughIII')
    .then(res => {
      console.log(res.data)
      this.setState({
        user:res.data
      })
    })
    .catch(err => console.log(err,'error'))
  }
  render(){return (
    <div className="App">
      <header> 
        <User user={this.state.user}/>
      </header>
      <section className='followers'>
        <Follower/>
      </section>
   
    </div>
  );
}
  
}

export default App;
