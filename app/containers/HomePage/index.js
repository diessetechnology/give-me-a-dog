/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectImages,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { Fab, Action } from 'react-tiny-fab';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadImages } from '../App/actions';
import { changeBreed } from './actions';
import { makeSelectBreed } from './selectors';
import reducer from './reducer';
import saga from './saga';
import DogImagesGallery from '../DogImagesGallery/index';
const key = 'home';

export function HomePage({
  breed,
  loading,
  error,
  images,
  onSubmitForm,
  onChangeBreed,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const dogImagesProps = {
    loading,
    error,
    images,
  };

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div className="content">
        <h3
          style={{
            fontFamily: 'Fredoka One',
            textAlign: 'center',
            fontSize: '1.7rem',
          }}
        >
          Give Me A Dog!
        </h3>
        <h3
          style={{
            fontFamily: 'Fredoka One',
            textAlign: 'center',
            fontSize: '1.6rem',
          }}
        >
          Inserisci una razza di 🐶 qui...e ti troverò una 🖼 di quel 🐶
        </h3>
        <input
          id="breed"
          className="form-control"
          value={breed}
          onChange={onChangeBreed}
          style={{ width: '70%', margin: '0 auto' }}
        />
        <button
          className="btn btn-primary"
          onClick={onSubmitForm}
          style={{
            width: '70%',
            margin: '0 auto',
            display: 'block',
            marginTop: '5px',
            fontFamily: 'Fredoka One',
          }}
        >
          <i className="fas fa-paw" style={{ marginRight: '5px' }} />
          Dammi un cane
        </button>
        <DogImagesGallery item={images} />
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  images: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]),
  onSubmitForm: PropTypes.func,
  breed: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  breed: makeSelectBreed(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  images: makeSelectImages(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeBreed: evt => dispatch(changeBreed(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadImages());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
