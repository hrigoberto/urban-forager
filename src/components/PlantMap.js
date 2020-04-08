import React, { createRef, Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerList from './MarkerList'

type MarkerData = {| ...Props, key: string |}

type State = {
  markers: Array<MarkerData>,
}

const attribution = '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'




export default class CustomComponent extends Component<{}, State> {
  state = {
    markers: [
      { key:'marker-1', position: [47.6262, -122.3221], content: 'raspberry' },
      { key:'marker-2', position: [47.6162, -122.3421], content: 'blackberry' },
      { key:'marker-3', position: [47.6062, -122.3321], content: 'apples' },
    ],
    idx: 4
  }


  handleClick = (e) => {
    const {markers} = this.state;

    markers.push({key: `marker-${this.state.idx}`, position: e.latlng, content: 'itworked!'})
    const idx = this.state.idx + 1
    console.log(idx);
    this.setState({markers, idx})
  }

  handleDelete = (e) => {
    const {markers} = this.state;
    const newMarkers = markers
      .filter(marker => marker.position !== e)
    this.setState({
      markers: newMarkers
    })
  }
  handleInputChange = (value, data) => {
    console.log(value, data);
    const marker = this.state.markers.find(m => m.key === data.key)
    const markers = this.state.markers.filter(m => m.key !== data.key)

    marker.content = value;
    markers.push(marker);
    this.setState({markers})
  }

  render() {
    return (
      <Map
        center={[47.6062, -122.3321]}
        zoom={13}
        style={{height: '100vh'}}
        onClick={this.handleClick}
        >
        <TileLayer
          attribution={attribution}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      {this.state.markers.map(data =>
          <Marker key={data.key} position={data.position} draggable="true">
          <Popup onClick={this.handleDelete}>
            <input value={data.content} onChange={(e) => this.handleInputChange(e.target.value, data)}/>
            <button onClick={() => this.handleDelete(data.position)}>X</button>
          </Popup>
        </Marker>
        )}
      </Map>
    )
  }
}
