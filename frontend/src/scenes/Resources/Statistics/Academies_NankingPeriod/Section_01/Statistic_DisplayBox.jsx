// from package
import React from 'react';
import { useSelector } from 'react-redux';
// from file
import { Box } from '@mui/material';
import { map_settings } from '../../../../../theme/styleDeclaration';
import StatisticMap from '../../../../../components/Maps/StatisticMap';


// styles
const DisplayBoxStyle = {
  width: '72vw',
  height: '800px'
};

function Statistic_DisplayBox({ data, hoverRef }) {
  // redux
  const filterChoice = useSelector(state => state.resource.filter);
  // render
  return (
    <div>
      <Box sx={ DisplayBoxStyle }>
        <StatisticMap
          data={ data }
          center={ map_settings.map_details.statisticMap.center }
          zoom={ map_settings.map_details.statisticMap.zoom }
          hoverRef={ hoverRef }
          filterChoice={ filterChoice } />
      </Box>
    </div>
  );
}

export default Statistic_DisplayBox;
