// from package
import React from 'react';
import { Box } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { useDispatch } from 'react-redux';
// from file
import { color } from '../../../theme/styleDeclaration';
import { prevPublication } from '../../../../redux/reducers/LiteratureSlice';


// styles

const ArrowIconStyle = {
  color: color.bg_lightgrey
};

const DirectionBtnUpStyle = {
  mb: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '30px',
  backgroundColor: color.bg_coal,
  filter: 'brightness(1.2)',
  borderTopLeftRadius: '25px',
  borderTopRightRadius: '25px',
  ':hover': {
    filter: 'brightness(1.5)',
    cursor: 'pointer'
  },
  ':active': {
    transform: 'scale(0.98)'
  }
};



// rendering 

function DirectionBtnUp({ selectItem, setSelectItem, length }) {

  //  redux
  const dispatch = useDispatch();

  // rendering
  return (
    <Box sx={ DirectionBtnUpStyle }
      onClick={ () => dispatch(prevPublication(length)) }>
      <ArrowDropUpIcon sx={ ArrowIconStyle } length={ length } />
    </Box>
  );
}

export default DirectionBtnUp;
