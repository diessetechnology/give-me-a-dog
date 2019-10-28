/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_IMAGES } from 'containers/App/constants';
import { imagesLoaded, imagesLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectBreed } from 'containers/HomePage/selectors';

/**
 * Dog images request/response handler
 */
export function* getImages() {
  // Select breed from store
  const breed = yield select(makeSelectBreed());
  const requestURL = `https://dog.ceo/api/breed/${breed}/images/random`;

  try {
    // Call our request helper (see 'utils/request')
    const images = yield call(request, requestURL);
    yield put(imagesLoaded(images, breed));
  } catch (err) {
    yield put(imagesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_IMAGES actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_IMAGES, getImages);
}
