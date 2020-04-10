import { useState } from 'react';

export default () => {
  const [markers, setMarkers] = useState([
        { key:'marker-1', position: [47.6262, -122.3221], content: 'raspberry' },
        { key:'marker-2', position: [47.6162, -122.3421], content: 'blackberry' },
        { key:'marker-3', position: [47.6062, -122.3321], content: 'apples' },
      ])
  const [idx, setIdx] = useState(4)

  const handleClick = (e) => {
    setMarkers([...markers, {key: `marker-${idx}`, position: e.latlng, content: 'itworked!'}])
    setIdx(idx + 1)
  }

  const handleDelete = (e) => {
    setMarkers(markers.filter(marker => marker.position !== e))
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
