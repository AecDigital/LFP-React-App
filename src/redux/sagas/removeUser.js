import { call, takeLatest } from 'redux-saga/effects';

import { DELETE_LFP_USER } from '../../consts/actionTypes';
import apiCall from '../api';


export function* removeLFPUser({userId}) {
  const parsedUserId = Number(userId)
  try {
    yield call(apiCall, 'delete', `https://reqres.in/api/users/${parsedUserId}`)
  } catch (error) {
    console.log(error);
  }
}

// Set watcher...
export default function* removeUser() {
  yield takeLatest(DELETE_LFP_USER, removeLFPUser);
}