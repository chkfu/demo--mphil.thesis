import { Leaflet_OriginalColorSettings } from './Leaflet_OriginalColorSettings';

export const Leaflet_OriginalLayerSettings = (item, category, isHovering) => {
  return {
    color: Leaflet_OriginalColorSettings(item, category, isHovering),
    fillOpacity: isHovering ? 0.2 : 0.7,
    weight: isHovering ? 4 : 2,
    zIndex: isHovering ? 10 : 1
  };
};

