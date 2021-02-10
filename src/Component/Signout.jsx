import React from 'react';

let Signout=({name, email, history})=>{
    let handleClick=(e)=>{
        history.push('/');
    }
    return(
        <div>
            <h2>{name}</h2>
            <h3>{email}</h3>
            <button className='btn btn-danger' onClick={handleClick}>Sign out</button>
        </div>
    )
}

export default Signout;