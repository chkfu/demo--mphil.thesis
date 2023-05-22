// from package
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, ListItem, Drawer, Typography, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// fromn file
import { color, font } from './../../../theme/styleDeclaration';


// styles

const LinkStyle = {
  textDecoration: 'none',
};

const ButtonContainer = {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end'
};

const CloseBtnStyle = {
  fontSize: '120%',
  ':hover': {
    cursor: 'pointer',
    color: 'color.text_lightgrey'
  },
  ':active': {
    transform: 'scale(0.95)'
  }
};



// components

const DrawerContainerStyle = {
  width: '400px',
  background: 'white',
  p: '40px 40px'
};

const DrawerListStyle = {
  mt: '20px', height: '550px'
};

const DrawerCloseBtn = () => {
  return (
    <Box sx={ ButtonContainer }>
      <CloseIcon sx={ CloseBtnStyle } />
    </Box>
  );
};

const DividerStyle = {
  m: ' 0 20px 10px 20px'
};

const DrawerItemStyle = {
  color: color.text_grey,
  fontFamily: font.content,
  fontSize: '18px',
  p: '10px 20px',
  ':hover': {
    cursor: 'pointer',
    filter: 'brightness(1.5)',
    textDecoration: 'underline',
    textUnderlineOffset: '10px'
  },
};

const DrawerHeadingStyle = {
  p: '10px 20px',
  color: color.text_darkgrey,
  fontFamily: font.content
};


// components

const DrawerNavItem = ({ to, content }) => {
  return (
    <Link to={ to } style={ LinkStyle }>
      <ListItem sx={ DrawerItemStyle }>
        { content }
      </ListItem>
    </Link >
  );
};

const DrawerNavList = () => {
  return (
    <Box sx={ DrawerListStyle }>

      <Typography sx={ DrawerHeadingStyle }>
        Links
      </Typography>

      <Divider sx={ DividerStyle } />

      <DrawerNavItem to='/' content='Home' />
      <DrawerNavItem to='/literatures' content='Literatures' />
      <DrawerNavItem to='/resources' content='Resources' />

    </Box>
  );
};


// rendering

function NavDrawer(props) {
  return (
    <Drawer
      anchor='left'
      open={ props.drawerOn }
      onClick={ () => props.setDrawerOn(false) }>

      <Box className='drawer--content'
        sx={ DrawerContainerStyle }>

        <DrawerCloseBtn />
        <DrawerNavList />

      </Box>
    </Drawer>

  );
}

export default NavDrawer;
