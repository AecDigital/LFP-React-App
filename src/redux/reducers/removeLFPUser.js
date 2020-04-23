import { DELETE_LFP_USER } from '../../consts/actionTypes';

const initialState = {
  data: []
};

export const lfpUser = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case DELETE_LFP_USER:
    return { ...state };
    default:
    return initialState;
  }
}