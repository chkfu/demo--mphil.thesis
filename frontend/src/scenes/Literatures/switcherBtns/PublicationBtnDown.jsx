// from package
import React from 'react';
import { Box } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch } from 'react-redux';
// from file
import { color } from '../../../theme/styleDeclaration';
import { nextPublication } from './../../../../redux/reducers/LiteratureSlice';



// styles

const ArrowIconStyle = {
  color: color.bg_lightgrey
};

const DirectionBtnDownStyle = {
  mt: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '30px',
  backgroundColor: color.bg_coal,
  filter: 'brightness(1.2)',
  borderBottomLeftRadius: '25px',
  borderBottomRightRadius: '25px',
  ':hover': {
    filter: 'brightness(1.5)',
    cursor: 'pointer'
  },
  ':active': {
    transform: 'scale(0.98)'
  }
};


// rendering

function DirectionBtnDown({ length }) {

  // redux
  const dispatch = useDispatch();

  // rendering
  return (
    <Box sx={ DirectionBtnDownStyle }
      onClick={ () => dispatch(nextPublication(length)) }>
      <ArrowDropDownIcon sx={ ArrowIconStyle } length={ length } />
    </Box>
  );
}

export default DirectionBtnDown;
