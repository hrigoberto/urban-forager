import { combineReducers } from 'redux';
import markersReducer from './markersReducer';

export default combineReducers({
  markers: markersReducer
})
