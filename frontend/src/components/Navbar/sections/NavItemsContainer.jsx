// from package
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, ListItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// fromn file
import { ResponsiveContext } from '../../../App';
import { color, font } from './../../../theme/styleDeclaration';
import NavDrawer from './NavDrawer';


// styles

const LinkStyle = {
  textDecoration: 'none',
};

const NavItemStyle = {
  fontFamily: font.content,
  color: color.text_lightgrey,
  fontSize: '20px',
  p: '10px 15px',
  ':hover': {
    cursor: 'pointer',
    filter: 'brightness(1.5)',
    textDecoration: 'underline',
    textUnderlineOffset: '10px'
  }
};

const ShrinkedContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  height: '60px'
};

const ExpandedContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '40px'
};



// components

const NavItem = ({ to, content }) => {
  return (
    <Link to={ to } style={ LinkStyle }>
      <ListItem sx={ NavItemStyle }>
        { content }
      </ListItem>
    </Link >
  );
};

const ShrinkedContainer = () => {

  const [drawerOn, setDrawerOn] = useState(false);

  return (
    <>
      <Box sx={ ShrinkedContainerStyle }>
        <IconButton onClick={ () => setDrawerOn(true) }>
          <MenuIcon sx={ { color: '#adb5bd' } } />
        </IconButton>
      </Box>

      <NavDrawer drawerOn={ drawerOn } setDrawerOn={ setDrawerOn } />
    </>
  );
};

const ExpandedContainer = () => {
  return (
    <Box sx={ ExpandedContainerStyle }>
      <NavItem to='/' content='Home' />
      <NavItem to='/literatures' content='Literatures' />
      <NavItem to='/maps' content='Maps' />
    </Box>
  );
};


// rendering

function NavItemsContainer() {

  // responsive design
  const screenWidth = useContext(ResponsiveContext);

  return (
    screenWidth > 768 ? <ExpandedContainer /> : <ShrinkedContainer />
  );
}

export default NavItemsContainer;
