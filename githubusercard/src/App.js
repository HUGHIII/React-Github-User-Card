import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  
  state = {
    users: [],
    };

  componentDidMount(){
    axios
    .get('https://api.github.com/users/hughIII')
    .then(res => {
      console.log(res.data)
      this.setState({
        users:res.data
      })
    })
    .catch(err => console.log(err,'error'))
  }
  render(){return (
    <div className="App">
    
    </div>
  );
}
  
}

export default App;
