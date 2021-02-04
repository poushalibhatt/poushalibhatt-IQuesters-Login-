import React from 'react';

let Todo=({history})=>{

    const handleClick=()=>{
        history.push('/');
    }
    return(
        <div>
            <h2>Poushali</h2>
            <h3>poushali.bhatt94@gmail.com</h3>
            <button className='btn btn-danger' onClick={handleClick}>Sign out</button>
        </div>
    )
}

export default Todo;