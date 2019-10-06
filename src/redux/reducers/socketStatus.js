import { WS_DISCONNECTED, WS_CONNECTED } from '../actionTypes';

const initialState = {
  connected: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case WS_CONNECTED:
      return {
        connected: true
      };
    case WS_DISCONNECTED:
      return {
        connected: false
      };
    default:
      return state;
  }
}
