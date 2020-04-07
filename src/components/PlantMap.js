import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

type State = {
  lat: number,
  lng: number,
  zoom: number,
}

const attribution = '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

export default class PlantMap extends Component<{}, State> {
  state = {
    lat: 47.6062,
    lng: -122.3321,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom} style={{height: '100vh'}}>
        <TileLayer
          attribution={attribution}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }
}
