// from package
import React from 'react';
import { Box } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useDispatch } from 'react-redux';
// from file
import { color } from '../../../theme/styleDeclaration';
import { nextPublication } from './../../../../redux/reducers/LiteratureSlice';



// styles

const ArrowIconStyle = {
  color: color.bg_lightgrey
};

const DirectionBtnRightStyle = {
  ml: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '4%',
  height: '120px',
  backgroundColor: color.bg_coal,
  filter: 'brightness(1.2)',
  borderTopRightRadius: '25px',
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

function DirectionBtnRight({ selectItem, setSelectItem, length }) {

  // redux
  const dispatch = useDispatch();

  // rendering
  return (
    <Box sx={ DirectionBtnRightStyle }
      onClick={ () => dispatch(nextPublication(length)) }>
      <ArrowRightIcon sx={ ArrowIconStyle } length={ length } />
    </Box>
  );
}

export default DirectionBtnRight;
