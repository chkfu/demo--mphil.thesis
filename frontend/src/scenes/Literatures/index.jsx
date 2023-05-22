// from package
import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
// from file
import { mapURL } from '../../theme/styleDeclaration';
import { ResponsiveContext } from './../../App';
import PageContainerFading from '../../components/Animation/PageContainerFading';
import SectionButtonFading from './../../../src/components/Animation/SectionContainerFading';
import Section_01 from './Section_01';
import Section_02 from './Section_02';

function Literatures() {

  // responsive design
  const screenWidth = useContext(ResponsiveContext);

  // data fetching
  const { data } = useQuery('fetching literature data', async () => {
    return await axios.get(mapURL.Literature);
  });

  if (!data) {
    return <></>;
  }

  // rendering
  return (
    <PageContainerFading>

      <SectionButtonFading>
        <Section_01
          screenWidth={ screenWidth }
          data={ data }
        />
      </SectionButtonFading>

      <SectionButtonFading>
        <Section_02
          screenWidth={ screenWidth }
          data={ data }
        />
      </SectionButtonFading>

    </PageContainerFading>
  );
}

export default Literatures;
