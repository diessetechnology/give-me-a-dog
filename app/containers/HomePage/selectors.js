/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectBreed = () =>
  createSelector(
    selectHome,
    homeState => homeState.breed,
  );

export { selectHome, makeSelectBreed };
