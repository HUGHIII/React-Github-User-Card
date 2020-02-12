import React from 'react'




const User = props => {
    return (
        <div className='user-card'>
            <h1>{props.user.login}</h1>
            <img src={props.user.avatar_url}/>
            <p>{props.user.name}</p>
            <p>Current Location: {props.user.location}</p>
            <p>Bio: {props.user.bio}</p>
            <p>{props.user.email}</p>
            <p>Followers: {props.user.followers}</p>
            <p>Following: {props.user.following}</p>
        </div>
    )
}

export default User