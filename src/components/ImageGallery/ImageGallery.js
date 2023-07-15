import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled'

 const ImageGallery = ({ images, onItemClick }) => {

    return (
      <ImageGalleryList>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            onItemClick={onItemClick}
          />          
        ))}    
      </ImageGalleryList>
    );
  }

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired,
};
export default ImageGallery