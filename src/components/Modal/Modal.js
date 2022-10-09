import { Backdrop,ModalPictures } from "./Modal.styled";
import { PropTypes } from 'prop-types';
import { Component } from "react";


export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleClick)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClick);
  }

  handleClick = e => {
    console.log(e.code)
    if(e.code === 'Escape') {
      this.props.onClose()
    }
  }
  
  closeModal = () => {
    this.props.onClose();
  };

  render() {
    return (
      <Backdrop onClick={this.closeModal}>
        <ModalPictures src={this.props.imageURL} alt={this.props.tags} />
      </Backdrop>
    );
  }
}

Modal.propTypes = {
  imageURL: PropTypes.string,
  onClose: PropTypes.func,
};