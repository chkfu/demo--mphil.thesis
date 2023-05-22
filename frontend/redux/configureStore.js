import { configureStore } from '@reduxjs/toolkit';
import ForewordSlice from './reducers/ForewordSlice';
import LiteratureSlice from './reducers/LiteratureSlice';
import ResourceSlice from './reducers/ResourceSlice';

export default configureStore({
  reducer: {
    timeline: ForewordSlice,
    literature: LiteratureSlice,
    resource: ResourceSlice
  }
});