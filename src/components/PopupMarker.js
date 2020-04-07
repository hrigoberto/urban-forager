import React from 'react'
import { Marker, Popup } from 'react-leaflet'

type Position = [number, number]

type Props = {|
  content: string,
  position: Position,
|}

const PopupMarker = ({ content, position }: Props) => (
  <Marker position={position}>
    <Popup>{content}</Popup>
  </Marker>
)

export default PopupMarker
