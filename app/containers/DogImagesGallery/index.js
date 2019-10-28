/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

import { makeSelectCurrentBreed } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import { Picture } from 'react-responsive-picture';

export function DogImagesGallery(props) {
  const { item } = props;
  // If the repository is owned by a different person than we got the data for
  // it's a fork and we should show the name of the owner

  // Put together the content of the repository

  const content = (
    <Picture
      src={item.message}
      style={{
        maxWidth: '65%',
        display: 'block',
        margin: '0 auto',
        marginTop: '6px',
      }}
    />
  );
  // Render the content into a list item
  return content;
}

DogImagesGallery.propTypes = {
  item: PropTypes.object,
  currentBreed: PropTypes.string,
};

export default connect(
  createStructuredSelector({
    currentBreed: makeSelectCurrentBreed(),
  }),
)(DogImagesGallery);
