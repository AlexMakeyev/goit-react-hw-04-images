import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './Modal.styled';


const modalRoot = document.querySelector('#modal-root');

export class Modal extends React.Component {
  
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  
  componentWillUnmount() {
    window.removeEventListener('Keydown', this.handleKeyDown);
  }
  
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  render() {
    return createPortal(
      <Overlay  onClick={this.handleBackdropClick}>
        <ModalWindow >
          <img src={this.props.src} alt="" />
        </ModalWindow>
      </Overlay>,
      modalRoot
    );
  }
}