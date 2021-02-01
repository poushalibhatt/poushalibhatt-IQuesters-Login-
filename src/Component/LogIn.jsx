import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';

let LogIn=()=>{
    const[name, setName]=useState('');
    const[password, setPassword]=useState('');
    const history= useHistory();

    let handleChange=(e)=>{
        setName(e.target.value);
        setPassword(e.target.value);
    }
    let handleClick=(e)=>{
        e.preventDefault();
        history.push()
    }
    return(
        <form>
            <label>User Name</label>
            <input type="text" value={name} onChange={handleChange}/>
            <label>Password</label>
            <input type="password" value={password} onChange={handleChange}/>
            <button type='submit' onClick={handleClick}>LogIn</button>
        </form>
    )
}

export default LogIn;