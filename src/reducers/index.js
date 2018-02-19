//const initialState = {
//  message: `It's easy to integrate React and Redux, isn't it?`,
//};
//
//function reducer(state = initialState) {
//  return state;
//}
//
//export default reducer;

import { MOVE_OBJECTS } from '../actions';
import moveObjects from './moveObjects';

const initialState = {
  angle: 45,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_OBJECTS:
      return moveObjects(state, action);
    default:
      return state;
  }
}

export default reducer;