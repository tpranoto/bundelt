import React from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import { auth, provider } from '../../utils/firebase/firebase';
import logo from '../../assets/logo512.png';

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(error => alert(error.message));
    };

    return (
        <div className='login'>
            <div className="login_logo">
                <img
                    src={logo}
                    alt=""
                />
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login;
