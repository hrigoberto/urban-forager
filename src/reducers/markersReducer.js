import { FETCH_MARKERS } from '../constants';
import { POST_MARKER } from '../constants';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_MARKERS:
      return action.payload
    case POST_MARKER:
    default:
      return state;
  }
};
