import React from 'react';
import axios from 'axios';
import FollowerCard from './followerCard';
import styled from 'styled-components';

const DivFollow = styled.div `
display:flex;
flex-direction:row;
flex-wrap:wrap;
padding:5%;


`




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
        .catch(err => console.log(err,'ERROR!!'))
    }

    render(){
        return(
            <DivFollow className='followers-div-map'>
                {this.state.followers.map(e => (
                    <FollowerCard key={e.id} followers={e}/>
                ))}
                 
            </DivFollow>

        )
    }
}

export default Follower