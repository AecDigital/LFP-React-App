import { put, call, takeLatest } from 'redux-saga/effects';

import { GET_LFP_USERS, LFP_USERS_SUCCESS } from '../../consts/actionTypes';
import apiCall from '../api';


export function* getLFPUsers({ payload }) {
  try {
    const users = yield call(apiCall, 'get', 'https://reqres.in/api/users')
    const lfpUsers = users.data
    yield put({ type: LFP_USERS_SUCCESS, lfpUsers });
  } catch (error) {
    console.log(error);
  }
}

// Set watcher...
export default function* getUsers() {
  yield takeLatest(GET_LFP_USERS, getLFPUsers);
}