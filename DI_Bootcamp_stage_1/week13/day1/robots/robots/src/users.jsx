import React from 'react'

const style = {
    display: 'inline-block',
    border: '1px solid white',
    margin: '12px',
    padding: '10px'
   
}

const User = (props) => {
    console.log(props.info);
    
    const { id, name, username, email } = props.info
    return (
        <div style={style}> 
            <img src={`https://robohash.org/${id}?200x200`}/>
            <h2>{name}</h2>
            <h4>{username}</h4>
            <p>{email}</p>
        </div>
    );
}

export default User