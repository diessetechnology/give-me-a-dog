import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import DogImagesGallery from 'containers/DogImagesGallery';

function DogImages({ loading, error, images }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (images !== false) {
    return <List items={images} component={DogImagesGallery} />;
  }

  return null;
}

DogImages.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  images: PropTypes.any,
};

export default DogImages;
