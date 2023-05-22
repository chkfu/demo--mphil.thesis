// from package
import React from 'react';
// from file
import HalfPageContentBox from '../../../components/Pages/HalfPageReusable/HalfPageContentBox';
import HalfPageSlideTitle from '../../../components/Pages/HalfPageReusable/HalfPageSlideTitle';
import HalfPageSlideText from '../../../components/Pages/HalfPageReusable/HalfPageSlideText';


// rendering

function Slide_03({ data }) {
  return (
    <HalfPageContentBox>

      <HalfPageSlideTitle title={ `TienTsin's Chanllenge` } />

      <HalfPageSlideText>
        Under the postwar garrison ban, Qing was possibile to control the Tientsin heartland with police force.
        <br /><br />
        Yuan Shikai, Viceroy of Chihli Province, therefore created a policing experiment in Paoting, in 1902. Following Tientsin handover, the new trained constables soon became the main power of control. Yuan further instructed to establish another experimental base in Tientsin counties.
        <br /><br />
        The new Police Academy in Tientsin also appointed Miura Kiden as the chief advisor, plus the Japanese coach team supported.
        Thus, Tientsin form an another domination as what Peking did.
      </HalfPageSlideText>

    </HalfPageContentBox>
  );
}

export default Slide_03;
