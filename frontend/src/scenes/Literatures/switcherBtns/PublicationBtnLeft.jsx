// from package
import React from 'react';
import { Box } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useDispatch } from 'react-redux';
// from file
import { color } from '../../../theme/styleDeclaration';
import { prevPublication } from '../../../../redux/reducers/LiteratureSlice';



// styles

const ArrowIconStyle = {
  color: color.bg_lightgrey
};

const DirectionBtnLeftStyle = {
  mr: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '4%',
  height: '120px',
  backgroundColor: color.bg_coal,
  filter: 'brightness(1.2)',
  borderTopLeftRadius: '25px',
  borderBottomLeftRadius: '25px',
  ':hover': {
    filter: 'brightness(1.5)',
    cursor: 'pointer'
  },
  ':active': {
    transform: 'scale(0.98)'
  }
};


// rendering

function DirectionBtnLeft({ length }) {

  // redux
  const dispatch = useDispatch();

  // rendering
  return (
    <Box sx={ DirectionBtnLeftStyle }
      onClick={ () => dispatch(prevPublication(length)) }>
      <ArrowLeftIcon sx={ ArrowIconStyle } length={ length } />
    </Box>
  );
}

export default DirectionBtnLeft;
