import { combineReducers } from 'redux';

import groups from './groups';
import socketStatus from './socketStatus';

export default combineReducers({ groups, socketStatus });
