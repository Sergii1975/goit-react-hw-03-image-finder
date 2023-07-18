
import React, { Component } from 'react';
import Modal from 'components/Modal/Modal';
import { ImageGalleryLi, ImageGalleryItemImg } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';


class ImageGalleryItem extends Component {
    state = {
        showModal: false
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };

    render() {
        const { showModal } = this.state;
        const { src, alt, largeImageURL } = this.props;

        return (
            <ImageGalleryLi onClick={this.toggleModal}>
                <ImageGalleryItemImg src={src} alt={alt} loading="lazy" />
                {showModal && (
                    <Modal
                        largeImageURL={largeImageURL}
                        tags={alt}
                        closeModal={this.toggleModal}
                    />
                )}
            </ImageGalleryLi>
        )
    };
};

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;