import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './ImageGalleryItem.styled';


export const ImageGalleryItem = ({ url, largeImageURL, onClick }) => {
  return (
    <Image
      src={url}
      alt=""
      onClick={() => {
        onClick(largeImageURL);
      }}
    />
  );
};



ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};