
import React, { Fragment } from 'react'
import PopupMarker from './PopupMarker';

type MarkerData = {| ...Props, key: string |}

const MarkerList = ({ markers }: { markers: Array<MarkerData> }) => {
  const items = markers.map(({ key, ...props }) => (
    <PopupMarker key={key} {...props} />
  ))
  return <Fragment>{items}</Fragment>
}

export default MarkerList;
