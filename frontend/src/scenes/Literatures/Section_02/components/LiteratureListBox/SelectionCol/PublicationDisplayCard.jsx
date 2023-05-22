// from package
import React from 'react';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
// from file
import { color } from '../../../../../../theme/styleDeclaration';
import { selectPublication } from '../../../../../../../redux/reducers/LiteratureSlice';


function PublicationDisplayCard({ screenWidth, id, image }) {

  // redux
  const dispatch = useDispatch();

  // render
  return (
    <Box
      key={ id }
      sx={ {
        backgroundImage: `url("${image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        m: screenWidth < 1024 ? '0 10px' : ' 8% 0',
        width: screenWidth < 1024 ? '80px' : '100%',
        height: screenWidth < 1024 ? '110px' : '220px',
        opacity: '0.5',
        filter: 'grayscale(0.8)',
        border: `4px solid ${color.bg_lightcoal}`,
        ':hover': {
          border: `4px solid ${color.border_darkblue}`,
          cursor: 'pointer',
          opacity: '1',
          filter: 'grayscale(0)'
        }
      } }
      onClick={ () => dispatch(selectPublication(id)) } />
  );
}

export default PublicationDisplayCard;
