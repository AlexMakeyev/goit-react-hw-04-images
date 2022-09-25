import React from "react";
import PropTypes from 'prop-types';
import {ImageGalleryItem} from "components/ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";

export const ImageGallery = ({ imgs, onClick }) => {
    return (
      <Gallery >
        {imgs.map(img => {
          return (
            <li key={img.id}>
              <ImageGalleryItem
                url={img.webformatURL}
                largeImageURL={img.largeImageURL}
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