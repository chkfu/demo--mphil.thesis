// from package
import React from 'react';
import { Box, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
// from file
import { color, font } from '../../../theme/styleDeclaration';
import { setTimelineCategory, setTimelinePeriod, reset } from '../../../../redux/reducers/ForewordSlice';


// formik setting

const initialValues = {
  timelineCategory: "",
  timelinePeriod: ""
};

// styles

const LabelStyle = {
  padding: '5px',
  marginLeft: '10px',
  fontFamily: font.content,
  color: color.text_lightgrey,
  fontSize: '18px'
};

const FormStyle = {
  marginLeft: '5vw',
  marginRight: '5vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end'
};

const FilterBoxStyle = {
  display: 'grid',
  gridTemplateRow: '1fr 1fr 0.5fr',
};

const SelectColStyle = {
  margin: '0 10px',
  width: '150px',
  fontFamily: font.content,
  fontSize: '18px'
};

const ButtonStyle = {
  backgroundColor: color.btn_orange,
  color: color.text_white,
  fontSize: '14px',
  fontFamily: font.content,
  ml: '10px',
  width: '80px',
  height: '30px',
  borderRadius: '25px',
  ':hover': {
    backgroundColor: color.btn_orange_hover,
    cursor: 'pointer'
  }, ':active': {
    transform: 'scale(0.98)'
  }
};

// components

const FilterFormContainer = ({ children }) => {
  return (
    <Box sx={ { width: '100%', height: '40px' } }>
      { children }
    </Box>
  );
};

const Filter_01 = () => {

  // redux
  const timelineCategory = useSelector((state) => state.timeline.timelineCategory);
  const dispatch = useDispatch();

  // render
  return (
    <Box sx={ FilterBoxStyle }>
      <label style={ LabelStyle }>Category :</label>

      <Field
        as='select'
        style={ SelectColStyle }
        name="timelineCategory"
        value={ timelineCategory }
        onChange={ (event) => dispatch(setTimelineCategory(event.target.value)) }>

        <option value='none'>  -- Please Select --  </option>
        <option value='Historical Event'>  Historical Event  </option>
        <option value='Knowledge Circulation'>  Knowledge Circulation  </option>
        <option value='Police Reform'>  Police Reform  </option>
        <option value='Clique Development'>  Clique Development  </option>

      </Field>

    </Box >
  );
};

const Filter_02 = () => {

  // redux
  const timelinePeriod = useSelector((state) => state.timeline.timelinePeriod);
  const dispatch = useDispatch();

  // render
  return (
    <Box sx={ FilterBoxStyle }>
      <label style={ LabelStyle }>Period :</label>

      <Field
        as='select'
        style={ SelectColStyle }
        name="timelinePeriod"
        value={ timelinePeriod }
        onChange={ (event) => dispatch(setTimelinePeriod(event.target.value)) }>

        <option value='none'>  -- Please Select --  </option>
        <option value='Late Qing Period'> Late Qing Period </option>
        <option value='Beiyang Period'> Beiyang Period </option>
        <option value='Nationalist Period'> Nationalist Period </option>

      </Field>

    </Box>
  );
};


// rendering
function FilterForm() {

  // redux
  const dispatch = useDispatch();

  return (
    <FilterFormContainer>
      <Formik initialValues={ initialValues }>
        {
          ({ values }) => (
            <Form style={ FormStyle }>
              <Filter_01 />
              <Filter_02 />
              <Button
                sx={ ButtonStyle }
                onClick={ () => {
                  dispatch(reset());
                } }>
                Reset
              </Button>
            </Form>
          )
        }
      </Formik>
    </FilterFormContainer >
  );
}

export default FilterForm;
