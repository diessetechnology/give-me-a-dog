/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_IMAGES,
  LOAD_IMAGES_ERROR,
  LOAD_IMAGES_SUCCESS,
} from './constants';

export function loadImages() {
  return {
    type: LOAD_IMAGES,
  };
}

export function imagesLoaded(images, breed) {
  return {
    type: LOAD_IMAGES_SUCCESS,
    images,
    breed,
  };
}

export function imagesLoadingError(error) {
  return {
    type: LOAD_IMAGES_ERROR,
    error,
  };
}
