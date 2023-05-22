// from package
import React from 'react';
import { ScaleControl, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';
// from file
import Leaflet_MapContainer from '../reusable/Leaflet_MapContainer';
import Leaflet_TileLayer from '../reusable/Leaflet_TileLayer';
import { Leaflet_OriginalLayerSettings } from './Leaftlet_OriginalLayerSettings';


// rendering
function StatisticMap({ data, center, zoom, hoverRef }) {

  // redux
  const filterChoice = useSelector(state => state.resource.filterChoice);
  // render
  return (
    <Leaflet_MapContainer center={ center } zoom={ zoom }>
      <ScaleControl />
      <Leaflet_TileLayer />

      {
        data.data.data.details.map((item) => {

          // functions: get each first [lat, lng] and turn to [lng, lat]
          const polygonDestructor = (coordsArr) => {
            return coordsArr.map((item) => {
              const swaped = [item[1], item[0]];
              return swaped;
            });
          };

          // provincial polygon event listener
          const LayerHoverHandler = {
            mouseover: (event) => {
              hoverRef.current = item;
              event.target.setStyle({
                weight: 5,
                fillOpacity: 0.85,
              });
            },
            mouseout: (event) => {
              hoverRef.current = item;
              event.target.setStyle({
                weight: 2,
                fillOpacity: 0.7,
              });
            },
          };

          // rendering
          return (
            <div key={ item.nameEng }>
              <Polygon
                pathOptions={ Leaflet_OriginalLayerSettings(item, filterChoice, false) }
                positions={ polygonDestructor(item.coordinates[0]) }
                eventHandlers={ LayerHoverHandler } />
            </div>
          );
        })
      }

    </Leaflet_MapContainer >
  );
};

export default StatisticMap;

