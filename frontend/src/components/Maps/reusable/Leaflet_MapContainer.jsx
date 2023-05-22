// from package
import React from 'react';
import { MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// from file
import { map_settings } from '../../../theme/styleDeclaration';

// styles
const ContainerStyle = {
  width: '100%',
  height: '100%'
};

// rendering
function Leaflet_MapContainer({ children, center, zoom }) {
  return (
    <MapContainer
      style={ ContainerStyle }
      center={ center }
      zoom={ zoom }
      scrollWheelZoom={ map_settings.leaflet_homemap.scrollWheelZoom }
      maxZoom={ map_settings.leaflet_homemap.maxZoom }
      minZoom={ map_settings.leaflet_homemap.minZoom }
    >
      { children }
    </MapContainer >
  );
}

export default Leaflet_MapContainer;
