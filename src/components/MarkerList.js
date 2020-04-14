import React from 'react'
import { Marker, Popup } from 'react-leaflet'

import useMapLogic from './useMapLogic';

const Markerlist = ({ data }) => {
  const [markerList, handleClick, handleDelete, handleInputChange] = useMapLogic()

  const renderMarker = () => {
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
                  <input value={data.content} onChange={(e) => handleInputChange(e.target.value, data)}/>
                </div>
                <button className="ui small button red" onClick={() => handleDelete(data._id)}>Delete</button>
              </form>
            </div>
          </div>
        </Popup>
      </Marker>
    )
  }

  return markerList.map(data => renderMarker(data))
}

export default Markerlist
