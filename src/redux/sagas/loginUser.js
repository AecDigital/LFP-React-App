import { takeLatest } from 'redux-saga/effects';

import { USER_LOGIN } from '../../consts/actionTypes';


export function loginUser({ email, password }) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "__cfduid=dc68d21cc152a96f0ddaa684b7628f1521587544749");
  const raw = JSON.stringify({"email":"eve.holt@reqres.in","password":"5656"});
  
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  try {
    let token = ''
  fetch("https://reqres.in/api/login", requestOptions)
    .then(response => response.text()
    .then(result => { 
      token = result; 
      localStorage.setItem('userToken', token);
    }))
  } catch (error) {
    console.log(error)
  }
}

// Set watcher...
export default function* login() {
  yield takeLatest(USER_LOGIN, loginUser);
}