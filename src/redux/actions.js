import {
  SET_ACTIVE,
  UPDATE_ACTIVE,
  WS_CONNECTED,
  WS_DISCONNECTED
} from './actionTypes';

export const setActive = (groupName, description, value) => ({
  type: SET_ACTIVE,
  groupName,
  description,
  value
});

export const updateActive = (groupName, description, value) => ({
  type: UPDATE_ACTIVE,
  groupName,
  description,
  value
});

export const wsConnected = () => ({
  type: WS_CONNECTED
});

export const wsDisconnected = () => ({
  type: WS_DISCONNECTED
});
