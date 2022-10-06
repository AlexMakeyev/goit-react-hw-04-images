import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './ImageGalleryItem.styled';


export const ImageGalleryItem = ({  webformatURL, largeImageURL, onClick }) => {
  return (
    <Image
      src={webformatURL}
      alt=""
      onClick={() => {
        onClick(largeImageURL);
      }}
    />
  );
};



ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};


