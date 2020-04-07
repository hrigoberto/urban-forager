import React, { Component } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import MarkerList from './MarkerList'

type MarkerData = {| ...Props, key: string |}

type State = {
  markers: Array<MarkerData>,
}

const attribution = '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'


export default class CustomComponent extends Component<{}, State> {
  state = {
    markers: [
      { key: 'marker1', position: [47.6262, -122.3221], content: 'raspberry' },
      { key: 'marker2', position: [47.6162, -122.3421], content: 'blackberry' },
      { key: 'marker3', position: [47.6062, -122.3321], content: 'apples' },
    ],
  }

  render() {
    return (
      <Map center={[47.6062, -122.3321]} zoom={13} style={{height: '100vh'}}>
        <TileLayer
          attribution={attribution}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerList markers={this.state.markers} />
      </Map>
    )
  }
}


// export default class PlantMap extends Component<{}, State> {
//   state = {
//     lat: 47.6062,
//     lng: -122.3321,
//     zoom: 13,
//   }
//
//   render() {
//     const position = [this.state.lat, this.state.lng]
//     return (
//       <Map center={position} zoom={this.state.zoom} style={{height: '100vh'}}>
//         <TileLayer
//           attribution={attribution}
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <Marker position={position}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </Map>
//     )
//   }
// }
