// from packages
import React from 'react';
import { Box, Typography } from '@mui/material';
// from file
import { color, font } from './../../../../../theme/styleDeclaration';


// styles

const SubTitleTextStyle = {
  color: color.text_lightgrey,
  fontFamily: font.content,
  fontSize: '20px',
  textWeight: 'bold',
  textDecoration: 'underline',
  textUnderlineOffset: '5px',
  p: '15px 0'
};

const StatTextStyle = {
  color: color.text_lightgrey,
  fontFamily: font.content,
  fontSize: '16px'
};

const SectionStyle = {
  p: '10px 20px',
};

const tRowStyle = {
  display: 'grid',
  gridTemplateColumns: '180px 120px',
  width: '100%'
};


// components

const SectionBox = ({ children }) => {
  return (
    <Box sx={ SectionStyle }>
      { children }
    </Box>
  );
};

const RowBox = ({ title, content }) => {
  return (
    <Box sx={ tRowStyle } >
      <Box>
        <Typography sx={ StatTextStyle }>
          { title }
        </Typography>
      </Box>
      <Box>
        <Typography sx={ StatTextStyle }>
          { content }
        </Typography>
      </Box>
    </Box>
  );
};

const PrimarySection = ({ hoverRef }) => {

  return (
    <SectionBox>
      <Typography sx={ SubTitleTextStyle }>Primary Education</Typography>
      { !hoverRef.current.primaryNameEng && <Typography sx={ StatTextStyle }>No information was reported.</Typography> }
      { hoverRef.current.primaryNameEng && <Typography sx={ StatTextStyle }>{ hoverRef.current.primaryNameEng }</Typography> }
      { hoverRef.current.primaryNumOfSchools && <RowBox title="Num of Schools :" content={ hoverRef.current.primaryNumOfSchools } /> }
      { hoverRef.current.primaryNumOfStds && <RowBox title="Num of Students :" content={ hoverRef.current.primaryNumOfStds } /> }
      { hoverRef.current.primaryNumOfGrads && <RowBox title="Num of Graduates :" content={ hoverRef.current.primaryNumOfGrads } /> }
      { hoverRef.current.primaryNumOfStaff && <RowBox title="Num of Staff :" content={ hoverRef.current.primaryNumOfStaff } /> }
      { hoverRef.current.primaryAnnualExpense && <RowBox title="Annual Expense :" content={ hoverRef.current.primaryAnnualExpense } /> }
      { hoverRef.current.primaryYear && <RowBox title="Commencement :" content={ hoverRef.current.primaryYear } /> }
      { hoverRef.current.primaryReportedAt && <RowBox title="Reported Date :" content={ hoverRef.current.primaryReportedAt } /> }
    </SectionBox>
  );
};

const SecondarySection = ({ hoverRef }) => {
  return (
    <SectionBox>
      { !hoverRef.current.tertiaryNameEng && <Typography sx={ SubTitleTextStyle }>Secondary Education</Typography> }
      { !hoverRef.current.secondaryNameEng && <Typography sx={ StatTextStyle }>No information was reported.</Typography> }
      { hoverRef.current.secondaryNameEng && <Typography sx={ StatTextStyle }>{ hoverRef.current.secondaryNameEng }</Typography> }
      { hoverRef.current.secondaryNumOfSchools && <RowBox title="Num of Schools :" content={ hoverRef.current.secondaryNumOfSchools } /> }
      { hoverRef.current.secondaryNumOfStds && <RowBox title="Num of Students :" content={ hoverRef.current.secondaryNumOfStds } /> }
      { hoverRef.current.secondaryNumOfGrads && <RowBox title="Num of Graduates :" content={ hoverRef.current.secondaryNumOfGrads } /> }
      { hoverRef.current.secondaryNumOfStaff && <RowBox title="Num of Staff :" content={ hoverRef.current.secondaryNumOfStaff } /> }
      { hoverRef.current.secondaryAnnualExpense && <RowBox title="Annual Expense :" content={ hoverRef.current.secondaryAnnualExpense } /> }
      { hoverRef.current.secondaryYear && <RowBox title="Commencement :" content={ hoverRef.current.secondaryYear } /> }
      { hoverRef.current.secondaryDirector && <RowBox title="Founder :" content={ hoverRef.current.secondaryDirector.split(',')[0] } />
      }
      { hoverRef.current.secondaryInfluencedBy && <RowBox title="Imitation :" content={ hoverRef.current.secondaryInfluencedBy } /> }
      { hoverRef.current.secondaryReportedAt && <RowBox title="Reported Date :" content={ hoverRef.current.secondaryReportedAt } /> }
    </SectionBox>
  );
};

const TertiarySection = ({ hoverRef }) => {
  return (
    <SectionBox>
      { hoverRef.current.tertiaryNameEng && <Typography sx={ SubTitleTextStyle }>Tertiary Education</Typography> }
      { hoverRef.current.tertiaryNameEng && <Typography sx={ StatTextStyle }>{ hoverRef.current.tertiaryNameEng }</Typography> }
      { hoverRef.current.tertiaryNameEng && <Typography sx={ StatTextStyle }>{ hoverRef.current.secondaryNameEng }</Typography> }
      { hoverRef.current.tertiaryNumOfSchools && <RowBox title="Num of Schools :" content='1' /> }
      { hoverRef.current.tertiaryYear && <RowBox title="Commencement :" content={ hoverRef.current.tertiaryYear } /> }
      { hoverRef.current.tertiaryDirector && <RowBox title="Founder :" content={ hoverRef.current.tertiaryDirector.split(',')[0] } /> }
      { hoverRef.current.tertiaryInfluencedBy && <RowBox title="Imitation :" content={ hoverRef.current.tertiaryInfluencedBy } /> }
    </SectionBox>
  );
};

// rendering

function Statistic_InfoBox_ContentCol({ hoverRef }) {
  return (
    <>
      <PrimarySection hoverRef={ hoverRef } />
      <SecondarySection hoverRef={ hoverRef } />
      <TertiarySection hoverRef={ hoverRef } />
    </>
  );
}

export default Statistic_InfoBox_ContentCol;
