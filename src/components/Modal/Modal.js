import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalDiv } from './Modal.styled'
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    };

    handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            this.props.closeModal();
        }
    };

    handleBackdropClick = (e) => {
        if (e.target === !e.currentTarget) {
            this.props.closeModal();
        }
    };

    render() {
        const { tags, largeImageURL } = this.props;
        return createPortal (
            <Overlay onClick={this.handleBackdropClick}>
                <ModalDiv>
                    <img src={largeImageURL} alt={tags}/>
                </ModalDiv>
            </Overlay>,
            modalRoot
        );
    }
};

Modal.propTypes = {
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};


export default Modal;