import { USER_LOGIN, USER_LOGIN_SUCCESS } from '../../consts/actionTypes';

const initialState = {
  data: []
};

export const loggedUser = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case USER_LOGIN:
    return { ...state };
    case USER_LOGIN_SUCCESS:
    return { ...state, data: action.loggedUser }
    default:
    return initialState;
  }
}