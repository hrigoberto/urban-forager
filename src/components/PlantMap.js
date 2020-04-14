import React, { useEffect } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { connect } from 'react-redux';
import { createMarkerandRefresh } from '../actions';
import useLocation from './useLocation';
import MarkerList from './MarkerList'

const attribution = '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

const PlantMap = (props) => {
  const [coords] = useLocation();

  const latlng = coords ? [coords.latitude, coords.longitude] : [47.6062, -122.3321]

  const handleClick = (e) => {
    props.createMarkerandRefresh({
      position: e.latlng,
      title: 'wooooah',
      description: 'wtf',
      image: 'waihdihwda.com'
    })
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
      <MarkerList />
    </Map>
  )

}

const mapStateToProps = (state) => {
  return {
    createMarkerandRefresh: createMarkerandRefresh,
  }
}

export default connect(mapStateToProps, { createMarkerandRefresh })(PlantMap);
