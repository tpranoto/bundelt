import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import './Login.css';
import logo from '../../assets/biglogo.png';
import SignUp from './SignUp/SignUp';
import { validEmailInput } from '../../utils/validation/validation';
import { useDispatch } from 'react-redux';
import { login } from '../../slices/userSlice';
import { getInitials } from '../../utils/helper/helper';

const Login = () => {
    const dispatch = useDispatch();
    const [emailInput, setEmailInput] = useState("");
    const [pwdInput, setPwdInput] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [pwdValid, setPwdValid] = useState(false);
    const [loc, setLoc] = useState({
        lat: 0,
        lon: 0,
    })
    const [signUp, setSignUp] = useState(false);

    const handlerSignIn = (e) => {
        e.preventDefault();

        if (emailInput !== "" && validEmailInput(emailInput)) {
            setEmailValid(true);
        }

        if (pwdInput !== "") {
            setPwdValid(true);
        }

        if (!emailValid || !pwdValid) {
            return
        }

        navigator.geolocation.getCurrentPosition((position) => {
            setLoc({
                lat: parseFloat(position.coords.latitude.toFixed(3)),
                lon: parseFloat(position.coords.longitude.toFixed(3)),
            });
        });

        fetch('/login', {
            method: "POST",
            body: JSON.stringify({
                email: emailInput,
                pwd: pwdInput,
                lat: loc.lat,
                lon: loc.lon,
            })
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong');
            }
        }).then((responseJson) => {
            console.log(responseJson);

            dispatch(login({
                uid: responseJson.user_id,
                initials: getInitials(responseJson.full_name),
                displayName: responseJson.full_name,
                lat: responseJson.lat,
                lon: responseJson.lon,
              }));
        }).catch((error) => {
            console.log("error: ", error);
        });
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLoc({
                lat: parseFloat(position.coords.latitude.toFixed(3)),
                lon: parseFloat(position.coords.longitude.toFixed(3)),
            });
        });
    }, []);

    return (
        <div className="login">
            {
                signUp ? (
                    <SignUp
                        lat={loc.lat}
                        lon={loc.lon}
                        callbackLogin={() => setSignUp(false)}
                    />
                ) : (<div className="login_container">
                    <div className="login_info">
                        <h2>Welcome back!</h2>
                        <span>We're so excited to see you again!</span>

                        <h5>Email</h5>
                        <input
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                        />

                        <h5>Password</h5>
                        <input
                            value={pwdInput}
                            onChange={(e) => setPwdInput(e.target.value)}
                            type="password"
                        />

                        <Button id="sign_in_submit_button" onClick={handlerSignIn}>Sign In</Button>
                        <p>Need an account? <span onClick={() => setSignUp(true)}>Register</span></p>
                    </div>

                    <div className="login_logo">
                        <img
                            src={logo}
                            alt=""
                        />
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default Login;
