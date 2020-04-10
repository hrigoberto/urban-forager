import React, { createRef, Component, useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import useMapLogic from './useMapLogic';

const attribution = '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

export default () => {
  const [markers, handleClick, handleDelete, handleInputChange] = useMapLogic()

  return (
    <Map
      center={[47.6062, -122.3321]}
      zoom={13}
      style={{height: '100vh'}}
      onClick={handleClick}
      >
      <TileLayer
        attribution={attribution}
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    {markers.map(data =>
        <Marker key={data.key} position={data.position} draggable="true">
        <Popup onClick={handleDelete}>
          <input value={data.content} onChange={(e) => handleInputChange(e.target.value, data)}/>
          <button onClick={() => handleDelete(data.position)}>X</button>
        </Popup>
      </Marker>
      )}
    </Map>
  )

}
