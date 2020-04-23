import { combineReducers } from 'redux';
import { lfpUsers } from './getLFPUsers';
import { lfpUser } from './getLFPUser';

const rootReducer = combineReducers({ lfpUsers, lfpUser });

export default rootReducer;