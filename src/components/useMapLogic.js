// import { useState, useEffect } from 'react';
// import markerApi from '../api';
//
// //TODO time to make a reducer for these badboys
//
//
// export default () => {
//
//   const [markers, setMarkers] = useState([])
//
//   async function getMarkers() {
//     const response = await markerApi.get()
//     setMarkers(response.data)
//
//     console.log(response);
//   }
//
//   useEffect(() => {
//     getMarkers()
//   }, [])
//
//   async function postMarker(latlng) {
//     await markerApi.post('', {
//       position: latlng,
//       title: 'wooooah',
//       description: 'wtf',
//       image: 'waihdihwda.com'
//     })
//   }
//
//   async function updateMarker(val, _id) {
//     await markerApi.put(_id, {
//       title: val,
//       description: 'wtf',
//       image: 'waihdihwda.com'
//     })
//   }
//
//   async function deleteMarker(_id) {
//     const res = await markerApi.delete(_id)
//     console.log(res);
//   }
//
//   const handleClick = (e) => {
//     postMarker(e.latlng)
//     getMarkers()
//   }
//
//   const handleDelete = (e) => {
//     deleteMarker(e)
//     getMarkers()
//     // setMarkers(markers.filter(m => m._id !== e._id))
//   }
//   const handleInputChange = (value, data) => {
//     updateMarker(value, data._id)
//     getMarkers()
//     //
//     // const marker = markers.find(m => m._id === data._id)
//     // const updatedMarkers = markers.filter(m => m.key !== data._id)
//     //
//     // marker.content = value;
//     // updatedMarkers.push(marker);
//     // setMarkers(updatedMarkers)
//   }
//
//   return [markers, handleClick, handleDelete, handleInputChange]
// }
