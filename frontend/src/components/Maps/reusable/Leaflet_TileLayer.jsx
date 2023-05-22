import React from 'react';
import { TileLayer } from 'react-leaflet';

function Leaflet_TileLayer() {
  return (
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  );
}

export default Leaflet_TileLayer;
