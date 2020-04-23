import { GET_LFP_USER, LFP_USER_SUCCESS } from '../../consts/actionTypes';

const initialState = {
  data: []
};

export const lfpUser = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_LFP_USER:
    return { ...state };
    case LFP_USER_SUCCESS:
    return { ...state, data: action.lfpUser }
    default:
    return initialState;
  }
}