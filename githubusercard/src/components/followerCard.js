import React from 'react';
import styled from 'styled-components';


const FollowerDiv = styled.div `
padding:3%;

`

const FollowerCard = props => {
    return (
        <FollowerDiv className='followers-div'>
            <h1>{props.followers.login}</h1>
            <img src={props.followers.avatar_url}/>
            <p>{props.followers.name}</p>
            <p>Current Location: {props.followers.location}</p>
            <p>Bio: {props.followers.bio}</p>
            <p>{props.followers.email}</p>
        </FollowerDiv>
    )
}

export default FollowerCard