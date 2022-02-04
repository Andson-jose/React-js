import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import './index.css';
import { Link } from "react-router-dom";

import logoGoogle from '../../images/Google__G__Logo.svg';

export default function Register() {
  
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [fullNameValidate, setFullNameValidate] = useState("")
  const [emailValidate, setEmailValidate] = useState("")
  const [passwordValidate, setPasswordValidate] = useState("")

  function SignUp(){
    if(fullName === ""){
      setFullNameValidate("O campo não pode estar vazio.")
      return;
    }else{
      setFullNameValidate("")
    }

    if(email === ""){
      setEmailValidate("O campo não pode estar vazio.")
      return;
    }else{
      setEmailValidate("")
    }

    if(password === ""){
      setPasswordValidate("O campo não pode estar vazio.")
      return;
    }else{
      setPasswordValidate("")
    }

    if(password.length < 6){
      setPasswordValidate("A senha não pode ter menos de 6 caracteres")
      return;
    }else{
      setPasswordValidate("")
    }

    if(validateEmail(email)){
      setEmailValidate("")
    }else{
      setEmailValidate("Digite um email valido")
      return;
    }

    alert("Cadastrado com sucesso!");
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
          Getting Started
        </div>
        <div style={{width: 433, paddingBottom: 25}}>
          <div style={{display: "inline-grid", paddingTop: 47}}>
            <TextField error={fullNameValidate != ""} helperText={fullNameValidate} onChange={event => setFullName(event.target.value)} label="Full Name" variant="standard" type="text" style={{width: 433}}/>
            <div style={{ paddingTop: 18 }}>
              <TextField error={emailValidate != ""} helperText={emailValidate} onChange={event => setEmail(event.target.value)} label="Users name or Email" variant="standard" type="email" style={{width: 433}} />
            </div>
            <div style={{ paddingTop: 18 }}>
              <TextField error={passwordValidate != ""} helperText={passwordValidate}  onChange={event => setPassword(event.target.value)} label="Create Password" variant="standard" type="password" style={{width: 433}}/>
            </div>
          </div>
          <div style={{ paddingBottom: 22, paddingTop: 22 }}>
            <Button onClick={() => { SignUp() }} variant="contained" className="btn-sign-in">Sign Up</Button>
          </div>
          <div style={{width: '80%', height: 20, borderBottom: '0.5px solid #707070', textAlign: 'center'}}>
            <span style={{fontSize: 14, backgroundColor: 'white', padding: '0px 16px', color: '#707070', position: "relative", top: 10}}>
              Or
            </span>
          </div>
        </div>
        <button type="button" className="btn-sign-in-google"><img src={logoGoogle} alt="logo" />Sign up with Google</button>
        <div style={{ paddingTop: 22 }}>
          By signing up, you agree to <b>Invision</b><br/><a href='#'>Terms of Conditions</a> and <a href='#'>Privacy Policy</a>
        </div> <div style={{ paddingTop: 22 }}>
          Already on <b>Invision</b>? <Link to="/">Log in</Link>
        </div>
    </>
  );
}
