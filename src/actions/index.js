import API from '../api'
import {dispatch} from 'redux'
import { FETCH_MARKERS, POST_MARKER } from '../constants';

export const createMarkerandRefresh = (marker) => async dispatch => {
  await dispatch(postOrPutMarker(marker));
  await dispatch(fetchMarkers());
}

export const fetchMarkers = () => async dispatch => {

  const response = await API.get();
  dispatch({ type: FETCH_MARKERS, payload: response.data})
}

export const postOrPutMarker = (marker) => async dispatch => {
  const response = marker._id ? await API.put(`/${marker._id}`, marker) : await API.post('/', marker);

  dispatch({ type: POST_MARKER, payload: response.data})
}

export const deleteMarker = (_id) => async dispatch => {
  await API.delete(_id);
  dispatch(fetchMarkers())
}
