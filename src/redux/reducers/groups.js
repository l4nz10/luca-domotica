import initialState from '../initialState';
import { SET_ACTIVE, UPDATE_ACTIVE } from '../actionTypes';

/**
 * TODO: Initialize the websocket here with the reconnection logic and all the other stuff
 * Note: a method for sending data that automatically knows when the socket is connected
 * (and enqueue the message until the socket is online) is required.
 */

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE:
    case UPDATE_ACTIVE:
      const { groupName, description, value } = action;
      return {
        ...state,
        [groupName]: state[groupName].map(item => {
          if (item.description === description) {
            return {
              ...item,
              active: value
            };
          }
          return item;
        })
      };
    default:
      return state;
  }
}
