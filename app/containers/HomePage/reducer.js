/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { CHANGE_BREED } from './constants';

// The initial state of the App
export const initialState = {
  breed: '',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_BREED:
        // Delete prefixed '@' from the github username
        draft.breed = action.breed.toLowerCase();
        break;
    }
  });

export default homeReducer;
