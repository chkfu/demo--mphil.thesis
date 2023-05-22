// from package
import React from 'react';
import { Box } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
// from file
import { font } from './../../../../../../theme/styleDeclaration';
import { selectFilterChoice } from '../../../../../../../redux/reducers/ResourceSlice';


// styles

const FormOuterFrameStyle = {
  p: '3px 15px'
};

const FormContainerStyle = {
  display: 'flex'
};

const SelectFieldStyle = {
  width: '70%',
  height: '30px',
  fontFamily: font.content,
  fontSize: '18px'
};


// components

const FormOuterFrame = ({ children }) => {
  return (
    <Box sx={ FormOuterFrameStyle }>
      { children }
    </Box>
  );
};

const FormSetting = ({ initialValues, children }) => {
  // redux
  const filterChoice = useSelector(state => state.resource.filterChoice);
  const dispatch = useDispatch();
  // render
  return (
    <Formik initialValues={ initialValues }>
      { ({ values }) => (
        <Form>
          <Box sx={ FormContainerStyle }>
            <Field
              as="select"
              name='filterChoice'
              style={ SelectFieldStyle }
              value={ filterChoice }
              onChange={ (event) => dispatch(selectFilterChoice(event.target.value)) }>
              { children }
            </Field>
          </Box>
        </Form>
      )
      }
    </Formik >
  );
};

const OptionsWithNone = () => {
  return (
    <option value='none'> ---Please Select---  </option>
  );
};

const OptionsWithBasic = () => {
  return (
    <>
      <option value='none'>  ---Please Selec --- </option>
      <option value="primaryNumOfSchools">  No. of Schools </option>
      <option value="primaryNumOfStds">  No. of Students  </option>
      <option value="primaryNumOfGrads">  No. of Graduates  </option>
      <option value="primaryNumOfStaff">  No. of Staff  </option>
      <option value="primaryAnnualExpense">  Annual Expense  </option>
    </>
  );
};

const OptionWithAdvanced = () => {
  return (
    <>
      <option value=''>  ---  Please Select  ---  </option>
      <option value="secondaryNumOfStds">  No. of Students  </option>
      <option value="secondaryNumOfGrads">  No. of Graduates  </option>
      <option value="secondaryNumOfStaff">  No. of Staff  </option>
      <option value="secondaryAnnualExpense">  Annual Expense  </option>
    </>
  );
};


// rendering

function FilterSelectForm({ initialValues }) {
  // redux
  const filterCategory = useSelector(state => state.resource.filterCategory);
  // render
  return (
    <FormOuterFrame>
      <FormSetting initialValues={ initialValues } >
        { filterCategory === '' && <OptionsWithNone /> }
        { filterCategory === 'primary' && <OptionsWithBasic /> }
        { filterCategory === 'advanced' && <OptionWithAdvanced /> }
      </FormSetting>
    </FormOuterFrame>
  );
}

export default FilterSelectForm;
