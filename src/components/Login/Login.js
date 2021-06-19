import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css'
import { auth, provider } from '../../firebase'

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(error => alert(error.message));
    };

    return (
        <div className='login'>
            <div className="login_logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt=""
                />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login;
