import React from 'react';
import PropTypes from 'prop-types';


const ImageGalleryItem = ({ url, largeImageURL, onClick }) => {
  return (
    <img
      src={url}
      alt=""
      className=""
      onClick={() => {
        onClick(largeImageURL);
      }}
    />
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};