import { SET_ACTIVE } from '../actionTypes';
import { wsConnected, wsDisconnected, updateActive } from '../actions';

const onOpen = store => event => {
  console.log('websocket open', event.target.url);
  store.dispatch(wsConnected());
};

const onClose = store => () => {
  console.log('websocket closed');
  store.dispatch(wsDisconnected());
};

const onMessage = store => event => {
  console.log('receiving server message');

  let name = '';
  let value = true;

  // TODO: analyze the message event and dispatch the following action:
  store.dispatch(updateActive(name, value));
};

const initSocket = store => {
  // TODO: Uncomment these once the sockAddr is available
  // const socket = new WebSocket();

  // socket.onopen = onOpen(store);
  // socket.onmessage = onMessage(store);
  // socket.onclose = onClose(store);

  const socket = {};

  return socket;
};

const socketMiddleware = store => {
  const socket = initSocket(store);

  // Intercept all redux actions and consume the ones for the websocket
  return next => action => {
    switch (action.type) {
      case SET_ACTIVE:
        console.log('sending a message');
        // TODO: handle the action data and set in an appropriate format via the socket
        // socket.send(
        //   JSON.stringify({ name: action.name, value: action.value })
        // );
        return next(action);
      default:
        return next(action);
    }
  };
};

export default socketMiddleware;
