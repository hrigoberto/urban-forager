import React, { createRef, Component, useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import useMapLogic from './useMapLogic';

const attribution = '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

export default () => {
  const [markers, handleClick, handleDelete, handleInputChange] = useMapLogic()

  const renderMarker = data => {
    return (
      <Marker key={data.key} position={data.position} draggable="true">
        <Popup onClick={handleDelete}>
          <form className="ui form">
            <div className="field">
              <label>Plant Name</label>
              <input value={data.content} onChange={(e) => handleInputChange(e.target.value, data)}/>
            </div>
            <button className="ui small button red" onClick={() => handleDelete(data.position)}>Delete</button>
          </form>
        </Popup>
      </Marker>
    )
  }

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
      {markers.map(data => renderMarker(data))}
    </Map>
  )

}
