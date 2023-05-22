// from package
import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
// from file
import { color } from '../../../../../../theme/styleDeclaration';
import DirectionBtnUp from '../../../../switcherBtns/PublicationBtnUp';
import DirectionBtnDown from '../../../../switcherBtns/PublicationBtnDown';
import DirectionBtnLeft from '../../../../switcherBtns/PublicationBtnLeft';
import DirectionBtnRight from '../../../../switcherBtns/PublicationBtnRight';
import PublicationDisplayCard from './PublicationDisplayCard';
import ActivatedDisplayCard from './ActivatedDisplayCard';



// components

const SelectionColContainer = ({ screenWidth, children }) => {

  // styles
  const SelectionColContainerStyle = {
    display: screenWidth < 1024 ? 'flex' : 'static',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    width: screenWidth < 1024 ? '90vw' : '95%',
    height: 'auto'
  };

  return (
    <Box sx={ SelectionColContainerStyle }>
      { children }
    </Box>
  );
};

const SelectionDisplay = ({ screenWidth, children }) => {

  // style
  const SelectionDisplayStyle = {
    display: screenWidth < 1024 ? 'flex' : 'static',
    justifyContent: 'space-evenly',
    overflow: 'scroll',
    mr: screenWidth < 1024 ? '0' : '10px',
    p: '5px 10px',
    width: '100%',
    height: screenWidth < 1024 ? '120px' : '720px',
    backgroundColor: color.bg_lightcoal
  };

  return (
    <Box sx={ SelectionDisplayStyle }>
      { children }
    </Box>
  );
};


// responsive design

const ExpandedCol = ({ data, screenWidth, length }) => {

  // redux
  const currAuthor = useSelector(state => state.literature.currAuthor);
  const currPublication = useSelector(state => state.literature.currPublication);

  // render
  return (
    <SelectionColContainer screenWidth={ screenWidth } >

      <DirectionBtnUp length={ length } />

      <SelectionDisplay screenWidth={ screenWidth }>
        { data.data.data.details[currAuthor].publication.map((item, index) => {
          if (index === currPublication)
            return <ActivatedDisplayCard
              key={ item._id }
              id={ index }
              screenWidth={ screenWidth }
              image={ item.itemCover }
            />;
          return <PublicationDisplayCard
            key={ item._id }
            id={ index }
            screenWidth={ screenWidth }
            image={ item.itemCover }
          />;
        }) }
      </SelectionDisplay>

      <DirectionBtnDown length={ length } />

    </SelectionColContainer >
  );
};

const ShrinkedCol = ({ data, screenWidth, length }) => {

  // redux
  const currAuthor = useSelector(state => state.literature.currAuthor);
  const currPublication = useSelector(state => state.literature.currPublication);

  //  render
  return (
    <SelectionColContainer screenWidth={ screenWidth } >

      <DirectionBtnLeft length={ length } />

      <SelectionDisplay screenWidth={ screenWidth }>
        { data.data.data.details[currAuthor].publication.map((item, index) => {
          if (index === currPublication)
            return <ActivatedDisplayCard
              key={ item._id }
              id={ index }
              screenWidth={ screenWidth }
              image={ item.itemCover } />;
          return <PublicationDisplayCard
            key={ item._id }
            id={ index }
            screenWidth={ screenWidth }
            image={ item.itemCover } />;
        }) }
      </SelectionDisplay>

      <DirectionBtnRight length={ length } />

    </SelectionColContainer>
  );
};



// rendering

function SelectionCol({ data, screenWidth }) {

  // redux
  const currAuthor = useSelector(state => state.literature.currAuthor);

  // declaration
  let pubsLength = data.data.data.details[currAuthor].publication.length;

  // render
  return (
    <SelectionColContainer>

      { screenWidth > 1024 ? (
        <ExpandedCol
          data={ data }
          screenWidth={ screenWidth }
          length={ pubsLength } />
      ) : (
        <ShrinkedCol
          data={ data }
          screenWidth={ screenWidth }
          length={ pubsLength } />
      ) }

    </SelectionColContainer>
  );
}

export default SelectionCol;
