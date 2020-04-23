import { put, call, takeLatest } from 'redux-saga/effects';

import { GET_LFP_USER, LFP_USER_SUCCESS } from '../../consts/actionTypes';
import apiCall from '../api';


export function* getLFPUser({userId}) {
  const parsedUserId = Number(userId)
  try {
    const user = yield call(apiCall, 'get', `https://reqres.in/api/users/${parsedUserId}`)
    const lfpUser = user.data
    yield put({ type: LFP_USER_SUCCESS, lfpUser });
  } catch (error) {
    console.log(error);
  }
}

// Set watcher...
export default function* getUser() {
  yield takeLatest(GET_LFP_USER, getLFPUser);
}