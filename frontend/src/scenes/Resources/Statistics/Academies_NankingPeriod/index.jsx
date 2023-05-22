// package
import React, { useRef } from 'react';
import { Box } from '@mui/material';
import { useQuery } from 'react-query';
import axios from 'axios';
// file
import { mapURL } from '../../../../theme/styleDeclaration';
import SectionContainerFading from './../../../../components/Animation/SectionContainerFading';
import Statistic_MapBox from './Section_01/Statistic_DisplayBox';
import Statistic_InfoBox from './Section_01/Statistic_InfoBox';
import Statistic_ChartBox from './Section_02/Statistic_ChartBox';


// formik setting 

const initialValues = {
  filterCategory: '',
  filterChoice: ''
};


// styles
const PageBoxStyle = {
  display: 'flex',
  boxShadow: '3',
  width: '100vw',
  height: '800px'
};


// rendering
function Academies_NankingPeriod() {

  // state Management
  const hoverRef = useRef('none');

  // data-fetching
  const { data } = useQuery('fetching-constable-schools-statistics', async () => {
    return await axios.get(mapURL.HomeMap_StatMap);
  });

  if (!data) {
    return <></>;
  }

  // componments
  const Section_01 = ({
    data,
    initialValues,
    hoverRef,
  }) => {

    return (
      <Box sx={ PageBoxStyle }>
        <Statistic_InfoBox
          hoverRef={ hoverRef }
          initialValues={ initialValues }
        />
        <Statistic_MapBox
          data={ data }
          hoverRef={ hoverRef }
        />
      </Box >
    );
  };

  // rendering
  return (
    <>
      <SectionContainerFading>
        <Section_01
          data={ data }
          initialValues={ initialValues }
          hoverRef={ hoverRef } />
      </SectionContainerFading>

      <SectionContainerFading>
        <Box sx={ PageBoxStyle }>
          <Statistic_ChartBox data={ data } />
        </Box>
      </SectionContainerFading>

    </>
  );
}

export default Academies_NankingPeriod;
