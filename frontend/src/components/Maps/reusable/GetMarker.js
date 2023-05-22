import React from 'react';
import Leaflet from 'leaflet';
import { map_settings } from '../../../theme/styleDeclaration';


export const GetActiveMarker = (item) => {

  // Get factions type
  if (item.category === 'Academy' && item.faction === 'Juntong')
    return Leaflet.icon({
      iconUrl: map_settings.leaflet_markers.url.faction_juntong,
      iconSize: [60],
      iconAnchor: [30, 30],
    });

  else if (item.category === 'Academy' && item.faction === 'Academy')
    return Leaflet.icon({
      iconUrl: map_settings.leaflet_markers.url.faction_academy,
      iconSize: [60],
      iconAnchor: [30, 30],
    });

  // Get Academy Types
  else if ((
    item.nameEng === 'Provincial Police Academy'
    && item.location === "Chekiang Province")
    || item.nameEng === "National Higher Police Academy"
  )
    return Leaflet.icon({
      iconUrl: map_settings.leaflet_markers.url.academy_selected,
      iconSize: [60],
      iconAnchor: [30, 30],
    });

  else if (item.category === 'Academy')
    return Leaflet.icon({
      iconUrl: map_settings.leaflet_markers.url.academy_active,
      iconSize: [60],
      iconAnchor: [30, 30],
    });

  // Get Others
  else if (item.category === 'Policing')
    return Leaflet.icon({
      iconUrl: map_settings.leaflet_markers.url.policing_active,
      iconSize: [60],
      iconAnchor: [30, 30],
    });
};

