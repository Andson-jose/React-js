import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import './index.css';
import { Link } from "react-router-dom";

import logoGoogle from '../../images/Google__G__Logo.svg';

export default function Login() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailValidate, setEmailValidate] = useState("")

  function SignIn(){
    if(validateEmail(email)){
      setEmailValidate("")
    }else{
      setEmailValidate("Digite um email valido")
      return;
    }

    if(email === "admin@admin.com" && password === "123"){
      alert("Logado com sucesso.");
    }else{
      alert("Email ou senha invalidos.");
    }
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <>
        <div className='head'>
          Invision
        </div>
        <div className='title-login'>
          Welcome to Invision
        </div>
        <div style={{width: 433, paddingBottom: 25}}>
          <div style={{display: "inline-grid", paddingTop: 47}}>
            <TextField error={emailValidate != ""} helperText={emailValidate} onChange={event => setEmail(event.target.value)} label="Users name or Email" variant="standard" type="email" style={{width: 433}} />
            <div style={{ paddingTop: 18 }}>
              <TextField onChange={event => setPassword(event.target.value)} label="Password" variant="standard" type="password" style={{width: 433}}/>
            </div>
          </div>
          <div className='recover-login'>
            Forgot password?
          </div>
          <div style={{ paddingBottom: 22 }}>
            <Button onClick={() => { SignIn() }} variant="contained" className="btn-sign-in">Sign In</Button>
          </div>
          <div style={{width: '80%', height: 20, borderBottom: '0.5px solid #707070', textAlign: 'center'}}>
            <span style={{fontSize: 14, backgroundColor: 'white', padding: '0px 16px', color: '#707070', position: "relative", top: 10}}>
              Or
            </span>
          </div>
        </div>
        <button type="button" className="btn-sign-in-google"><img src={logoGoogle} alt="logo" />Sign in with Google</button>
        <div style={{ paddingTop: 22 }}>
          New <b>Invision</b>? <Link to="/registro">Create Account</Link>
        </div>
    </>
  );
}
