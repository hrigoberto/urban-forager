import { useState, useEffect } from 'react';
import markerApi from '../api';


export default () => {

  const [markers, setMarkers] = useState([])

  async function getMarkers() {
    const response = await markerApi.get()
    setMarkers(response.data)

    console.log(response);
  }

  useEffect(() => {
    getMarkers()
  }, [])

  async function postMarker(latlng) {
    await markerApi.post('', {
      position: latlng,
      title: 'wooooah',
      description: 'wtf',
      image: 'waihdihwda.com'
    })
  }

  async function deleteMarker(_id) {
    const res = await markerApi.delete(_id)
    console.log(res);
  }

  const handleClick = (e) => {
    postMarker(e.latlng)
    getMarkers()
  }

  const handleDelete = (e) => {
    deleteMarker(e)
    setMarkers(markers.filter(m => m._id !== e._id))
  }
  const handleInputChange = (value, data) => {
    const marker = markers.find(m => m.key === data.key)
    const updatedMarkers = markers.filter(m => m.key !== data.key)

    marker.content = value;
    updatedMarkers.push(marker);
    setMarkers(updatedMarkers)
  }

  return [markers, handleClick, handleDelete, handleInputChange]
}
