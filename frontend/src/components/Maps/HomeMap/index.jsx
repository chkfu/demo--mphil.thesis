import React from 'react';
import { Marker, ScaleControl, LayersControl, LayerGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './homemap.css';
// from file
import Leaflet_MapContainer from '../reusable/Leaflet_MapContainer';
import Leaflet_TileLayer from './../reusable/Leaflet_TileLayer';
import { GetActiveMarker } from '../reusable/GetMarker';
import Leaflet_Popup from './../reusable/Leaflet_Popup';


// rendering
function HomeMap({ data, center, zoom }) {
  // compoments
  const MarkerComponent = ({ id, item, item_coord }) => {
    return (
      <Marker
        key={ `marker--${id}` }
        position={ item_coord }
        icon={ GetActiveMarker(item) }
        eventHandlers={ MarkerHoverHandler }
        riseOnHover>
        <Leaflet_Popup item={ item } />
      </Marker>
    );
  };

  // functions
  const MarkerHoverHandler = {
    mouseover: (event) => {
      event.target.openPopup();
    },
    mouseout: (event) => {
      event.target.closePopup();
    },
  };


  // rendering
  return (
    <Leaflet_MapContainer center={ center } zoom={ zoom }>
      <ScaleControl />
      <Leaflet_TileLayer />

      <LayersControl position="topright">


        {/* LayerControl - Chapter 2 - juntong faction */ }
        <LayersControl.Overlay
          name='Policing'
          checked>
          <LayerGroup>
            {
              data.data.data.details.map((item) => {
                // Attn:  leaflet.js reading lng, lat, and therefore reverse before mapping
                const item_coord = [item.coordinates[1], item.coordinates[0]];
                if (item.category === 'Policing')
                  return (
                    <MarkerComponent
                      key={ item._id }
                      id={ item.id }
                      item={ item }
                      item_coord={ item_coord } />
                  );
                return;
              }) }
          </LayerGroup>
        </LayersControl.Overlay>

        {/* LayerControl - Chapter 2 - CPA faction */ }
        <LayersControl.Overlay
          name='Academy'
          checked>
          <LayerGroup>
            {
              data.data.data.details.map((item) => {
                // Attn:  leaflet.js reading lng, lat, and therefore reverse before mapping
                const item_coord = [item.coordinates[1], item.coordinates[0]];
                if (item.category === 'Academy')
                  return (
                    <MarkerComponent
                      key={ item._id }
                      item={ item }
                      item_coord={ item_coord } />
                  );
                return;
              }) }
          </LayerGroup>
        </LayersControl.Overlay>


      </LayersControl>
    </Leaflet_MapContainer >
  );
};

export default HomeMap;


