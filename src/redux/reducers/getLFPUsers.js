import { GET_LFP_USERS, LFP_USERS_SUCCESS } from '../../consts/actionTypes';

const initialState = {
  data: []
};

export const lfpUsers = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_LFP_USERS:
    return { ...state };
    case LFP_USERS_SUCCESS:
    return { ...state, data: action.lfpUsers }
    default:
    return initialState;
  }
}