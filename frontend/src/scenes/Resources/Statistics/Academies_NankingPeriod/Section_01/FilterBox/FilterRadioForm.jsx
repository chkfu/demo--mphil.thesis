// from package
import React from 'react';
import { Box, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
// from file
import { color, font } from './../../../../../../theme/styleDeclaration';
import { selectFilterCategory, resetFilters } from '../../../../../../../redux/reducers/ResourceSlice';


// styles

const OuterFrameStyle = {
  p: '3px'
};

const FormContainerStyle = {
  display: 'flex',
  justifyContent: 'space-evenly'
};

const LabelStyle = {
  padding: '0 5px',
  color: color.text_lightgrey,
  fontSize: '18px',
  fontFamily: font.content
};

const ResetBtnStyle = {
  width: '70px', color: color.text_white, backgroundColor: color.btn_orange, fontSize: '12px', fontWeight: 'bold', borderRadius: '20px', ':hover': {
    backgroundColor: color.btn_orange_hover, cursor: 'pointer'
  }, ':active': {
    transform: 'scale(0.98)'
  }
};


// components

const FormOuterFrame = ({ children }) => {
  return (
    <Box sx={ OuterFrameStyle }>
      { children }
    </Box>
  );
};

const FormSetting = ({ initialValues, children }) => {
  return (
    <Formik initialValues={ initialValues }>
      { ({ values }) => (
        <Form>
          <Box sx={ FormContainerStyle }>
            { children }
          </Box>
        </Form>
      ) }
    </Formik >
  );
};

const RadioBox_Basic = () => {
  // redux
  const filterCategory = useSelector(state => state.resource.filterCategory);
  const dispatch = useDispatch();
  // render
  return (
    <Box>
      <Field
        type='radio'
        name='filterCategory'
        onClick={ () => dispatch(selectFilterCategory('primary')) }
        checked={ filterCategory === 'primary' } />
      <label style={ LabelStyle }>
        Basic
      </label>
    </Box>
  );
};

const RadioBox_Advanced = () => {
  // redux
  const filterCategory = useSelector(state => state.resource.filterCategory);
  const dispatch = useDispatch();
  // render
  return (
    <Box>
      <Field
        type='radio'
        name='filterCategory'
        onClick={ () => dispatch(selectFilterCategory('advanced')) }
        checked={ filterCategory === 'advanced' } />
      <label style={ LabelStyle }>
        Advanced
      </label>
    </Box >
  );
};

const ResetButtonBox = () => {
  // redux
  const dispatch = useDispatch();
  // render
  return (
    <Box>
      <Button
        sx={ ResetBtnStyle }
        onClick={ () => dispatch(resetFilters()) }>
        Reset
      </Button>
    </Box>
  );
};


// rendering

function FilterRadioForm({ initialValues }) {
  return (
    <FormOuterFrame>
      <FormSetting initialValues={ initialValues = { initialValues } }>
        <RadioBox_Basic />
        <RadioBox_Advanced />
        <ResetButtonBox />
      </FormSetting>
    </FormOuterFrame>
  );
}

export default FilterRadioForm;
