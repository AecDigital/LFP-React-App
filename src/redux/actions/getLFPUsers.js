import { 
  GET_LFP_USERS, 
  LFP_USERS_SUCCESS, 
  GET_LFP_USER, 
  LFP_USER_SUCCESS, 
  DELETE_LFP_USER, 
  USER_LOGIN,
  USER_LOGIN_SUCCESS
} from '../../consts/actionTypes';

export const getUsers = () => ({ type: GET_LFP_USERS, payload: null });

export const setUsers = (payload) => ({ type: LFP_USERS_SUCCESS, data: payload });

export const getUser = (userId) => ({ type: GET_LFP_USER, userId: userId });

export const setUser = (payload) => ({ type: LFP_USER_SUCCESS, data: payload });

export const removeUser = (userId) => ({ type: DELETE_LFP_USER, userId: userId});

export const userLogin = (email, password) => ({ type: USER_LOGIN, email, password });

export const userLogged = (payload) => ({type: USER_LOGIN_SUCCESS, data: payload });
