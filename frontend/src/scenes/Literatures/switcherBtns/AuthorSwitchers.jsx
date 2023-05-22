// from package
import React from 'react';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { prevAuthor, nextAuthor } from '../../../../redux/reducers/LiteratureSlice';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// from file
import { color } from './../../../theme/styleDeclaration';

// styles

const ContainerStyle = {
  position: 'absolute',
  width: '100vw',
  display: 'flex',
  justifyContent: 'space-between'
};

const SwitcherLeftStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '5vw',
  height: '800px',
  backgroundColor: color.btn_lightgrey,
  filter: 'brightness(0.7)',
  opacity: '0.3',
  zIndex: '20',
  ':hover': {
    cursor: 'pointer',
    filter: 'brightness(0.5)',
    opacity: '0.5',
  },
  ':active': {
    transform: 'scale(0.95)'
  }
};

const SwitcherRightStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '5vw',
  height: '800px',
  backgroundColor: color.btn_lightgrey,
  filter: 'brightness(0.7)',
  opacity: '0.3',
  zIndex: '20',
  ':hover': {
    cursor: 'pointer',
    filter: 'brightness(0.5)',
    opacity: '0.5',
  },
  ':active': {
    transform: 'scale(0.95)'
  }
};

const IconStyle = {
  fontSize: '400%',
  color: color.text_grey,
  filter: 'brightness(0.2)'
};





// rendering

function AuthorSwitchers({ data }) {

  // declaration
  const listLength = data.data.data.details.length;

  // redux 
  const dispatch = useDispatch();

  // render
  return (
    <div style={ ContainerStyle }>

      <Box
        sx={ SwitcherLeftStyle }
        onClick={ () => dispatch(prevAuthor(listLength)) }
      >
        <ChevronLeftIcon sx={ IconStyle } />
      </Box>

      <Box
        sx={ SwitcherRightStyle }
        onClick={ () => dispatch(nextAuthor(listLength)) }>
        <ChevronRightIcon sx={ IconStyle } />
      </Box>

    </div>
  );
}

export default AuthorSwitchers;
