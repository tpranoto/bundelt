import React, { useState } from 'react';
import './SignUp.css';
import { Button } from '@material-ui/core';
import { validEmailInput } from '../../../utils/validation/validation';


const SignUp = ({ lat, lon, callbackLogin }) => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [fullName, setFullname] = useState("");
    const [msisdn, setMsisdn] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [pwdValid, setPwdValid] = useState(false);
    const [nameValid, setNameValid] = useState(false);
    const [msisdnValid, setMsisdnValid] = useState(false);


    const handleSignUp = () => {
        if (email !== "" && validEmailInput(email)) {
            setEmailValid(true);
        }

        if (pwd !== "") {
            setPwdValid(true);
        }

        if (fullName !== "") {
            setNameValid(true);
        }

        if (msisdn !== "") {
            setMsisdnValid(true);
        }

        if (!emailValid || !pwdValid || !nameValid || !msisdnValid) {
            return
        }

        fetch('/signup', {
            method: "POST",
            body: JSON.stringify({
                email: email,
                pwd: pwd,
                full_name: fullName,
                msisdn: msisdn,
                lat: lat,
                lon: lon,
            })
        }).then((response) => {
            callbackLogin();
        }).catch((error) => {
            console.log("error: ", error);
        });
    };

    return (
        <div className="signup">
            <h2>Create an account</h2>

            <h5>Email</h5>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                type="password"
            />

            <h5>FullName</h5>
            <input
                value={fullName}
                onChange={(e) => setFullname(e.target.value)}
            />

            <h5>Phone Number</h5>
            <input
                value={msisdn}
                onChange={(e) => setMsisdn(e.target.value)}
            />

            <Button onClick={handleSignUp}>Sign Up</Button>
            <p onClick={callbackLogin}>Already have an account?</p>
        </div>
    )
}

export default SignUp;
