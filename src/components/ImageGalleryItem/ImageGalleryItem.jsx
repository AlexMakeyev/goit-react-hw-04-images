import React from 'react';
import PropTypes from 'prop-types';


export const ImageGalleryItem = ({ url, largeImageURL, onClick }) => {
  return (
    <img
      src={url}
      alt=""
      className=""
      onClick={() => onClick(largeImageURL)
      }
    />
  );
};



ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};