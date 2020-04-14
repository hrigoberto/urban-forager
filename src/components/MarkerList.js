import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Marker, Popup } from 'react-leaflet'
import { fetchMarkers, deleteMarker } from '../actions';




const MarkerList = (props) => {
  useEffect(() => {
    props.fetchMarkers()
  }, [])

  const handleDelete = (_id) => {
    const result = window.confirm('Are you sure you want to delete this item?');
      if (result) {
    return props.deleteMarker(_id)
    }
  }

  const renderMarker = (data) => {
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
                </div>
                <button className="ui small button red" onClick={() => handleDelete(data._id)}>Delete</button>
              </form>
            </div>
          </div>
        </Popup>
      </Marker>
    )
  }

  return props.markers.map(data => renderMarker(data))
}

const mapStateToProps = (state) => {
  return {
    fetchMarkers: fetchMarkers,
    markers: state.markers
  }
}

export default connect(mapStateToProps, { fetchMarkers, deleteMarker })(MarkerList);
