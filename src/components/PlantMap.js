import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import useMapLogic from './useMapLogic';
import useLocation from './useLocation';

const attribution = '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

// TODO: pull out popup logic into a form with submit

export default () => {
  const [markers, handleClick, handleDelete, handleInputChange] = useMapLogic()
  const [coords] = useLocation();

  const latlng = coords ? [coords.latitude, coords.longitude] : [47.6062, -122.3321]

  const renderMarker = data => {
    return (
      <Marker key={data._id} position={data.position} draggable="true">
        <Popup >
          <div className="ui card">
            <div className="image">
              <img src="http://seattlemag.com/sites/default/files/field/image/raspberries-3524004_1920.jpg" alt={data.content}/>
            </div>
            <div className="content">
              <form className="ui form">
                <div className="field">
                  <label>Plant Name</label>
                  <input value={data.title} onChange={(e) => handleInputChange(e.target.value, data)}/>
                </div>
                <button className="ui small button red" onClick={() => handleDelete(data._id)}>Delete</button>
              </form>
            </div>
          </div>
        </Popup>
      </Marker>
    )
  }

  return (
    <Map
      center={latlng}
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
