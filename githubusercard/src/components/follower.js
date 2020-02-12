import React from 'react';
import axios from 'axios';



class Follower extends React.Component {
    state = {
        followers:[]
    }

    componentDidMount(){
        axios.get('https://api.github.com/users/hughIII/followers')
        .then(res => {
            console.log(res.data)
            this.setState({
                followers:res.data
            })
        })
    }

    render(){
        return(
            <div>

            </div>

        )
    }
}

export default Follower