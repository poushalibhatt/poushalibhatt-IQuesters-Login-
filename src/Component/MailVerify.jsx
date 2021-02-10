import React from 'react';
import auth from './../Firebase/index';

let MailVerify=()=>{

    firebase.auth.currentUser.sendMailVerification()
    .then(()=>{})
    return(
       <div>hi</div>
    )
}

export default MailVerify;