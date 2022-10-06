import React from "react";
import PropTypes from 'prop-types';
import {ImageGalleryItem} from "components/ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

export const ImageGallery = ({ images, onClick }) => {
    return (
      <Gallery >
        {images.map(({id, webformatURL, largeImageURL}) => {
          return (
            <li key={id}>
              <ImageGalleryItem
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                onClick={onClick}
              />
            </li>
          );
        })}
      </Gallery>
    );
  };
  ImageGallery.propTypes = {
    imgs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
      })
    ),
    onClick: PropTypes.func.isRequired,
  };