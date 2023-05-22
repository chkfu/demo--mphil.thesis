// from package
import React from 'react';
import { Box } from '@mui/material';
import { Popup } from 'react-leaflet';
// from file
import { color, font } from './../../../theme/styleDeclaration';


// styles

const PopupBoxStyle = {
  paddingTop: '15px', overflowY: 'scroll', width: 'auto', height: 'auto'
};

const rowBoxStyle = {
  display: 'flex'
};

const tHeadBoxStyle = {
  display: 'flex', alignItems: 'center', width: '60px', p: '0', m: '0'
};

const tContentBoxStyle = {
  display: 'flex', alignItems: 'center', p: '8px 0'
};

const tHeadTextStyle = {
  fontSize: '10px',
  fontFamily: font.content,
  color: color.text_darkgrey,
  lineHeight: '10px'
};

const tContentTextStyle = {
  fontSize: '10px',
  fontFamily: font.content,
  color: color.text_darkgrey,
  lineHeight: '10px'
};

// components

const TableRow = ({ title, text }) => {
  return (
    <div style={ rowBoxStyle }>
      <Box sx={ tHeadBoxStyle }>
        <span style={ tHeadTextStyle }>{ `${title}:` }</span>
      </Box>
      <Box sx={ tContentBoxStyle }>
        <span style={ tContentTextStyle }>{ text }</span>
      </Box>
    </div >
  );
};


// rendering

function Leaflet_Popup({ item }) {
  return (
    <Popup>
      <div style={ PopupBoxStyle }>
        { item.nameEng && <TableRow title='Name' text={ item.nameEng } /> }
        { item.nameChi && <TableRow title='Name(chi)' text={ item.nameChi } /> }
        { item.faction && <TableRow title='Faction' text={ `${item.faction} faction` } /> }
        { item.location && <TableRow title='Location' text={ item.location } /> }
        { item.director && <TableRow title='Director' text={ item.director } /> }
        { item.chiefPrincipal && <TableRow title='Principal' text={ item.Principal } /> }
        { item.chiefManager && <TableRow title='Chief' text={ item.chiefManager } /> }
        { item.annualExpense && <TableRow title='Expenses' text={ `${item.annualExpense} p.a.` } /> }
        { item.numOfSchools && <TableRow title='Schools' text={ item.numOfSchools } /> }
        { item.numOfStds && <TableRow title='Students' text={ item.numOfStds } /> }
        { item.numOfGrads && <TableRow title='Graduates' text={ item.numOfGrads } /> }
        { item.numOfGrads && <TableRow title='Staff' text={ item.numOfStaff } /> }
        { item.period && <TableRow title='Period' text={ item.period } /> }
        { item.year && <TableRow title='Year' text={ item.year } /> }
        { item.reportedAt && <TableRow title='Reported' text={ item.reportedAt } /> }
      </div>
    </Popup >
  );
}

export default Leaflet_Popup;;
