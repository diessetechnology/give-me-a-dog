/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_IMAGES_SUCCESS,
  LOAD_IMAGES,
  LOAD_IMAGES_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentBreed: false,
  images: {},
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_IMAGES:
        draft.loading = true;
        draft.error = false;
        draft.images = false;
        break;

      case LOAD_IMAGES_SUCCESS:
        draft.images = action.images;
        draft.loading = false;
        draft.currentBreed = action.breed;
        break;

      case LOAD_IMAGES_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
