import { all } from 'redux-saga/effects';
import getUsers from './allUsers';
import getUser from './oneUser'
import removeUser from './removeUser'
import login from './loginUser'

export default function* rootSaga() {
  yield all([
    getUsers(),
    getUser(),
    removeUser(),
    login()
  ]);
}