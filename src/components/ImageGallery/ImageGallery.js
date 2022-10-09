import { getPictures } from "api";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { GalleryItem } from "components/ImageGalleryItem/ImageGalleryItem.styled";
import { Component } from "react"
import { toast } from "react-toastify";
import { Gallery } from "./ImageGallery.styled";


export class ImageGallery extends Component {
    state = {
    page: 1,
    pictures: [],
    loading: false,
    imageURL: null,
    isModalOpen: false,
    }

    componentDidUpdate(prevProps, _) {
        if (prevProps.input !== this.props.input) {
      this.setState({ loading: true });
            getPictures(this.props.input, this.state.page).then(response => {
        if (response.length > 0) {
            this.setState({ pictures: [...response], loading: false });
        } else {
          this.setState({ loading: false });
          toast.error('Wrong request');
        }
      });
        }
    }
        openModal = imageURL => {
    this.setState({ isModalOpen: true, imageURL: imageURL });
  };
  closeModal = () => this.setState({ isModalOpen: false, modalUrl: null });
    render() {
        return (
            <Gallery className="gallery">
                {this.state.pictures.map(picture => (
                    <GalleryItem key={picture.id}>
                        <ImageGalleryItem image={picture}  />
                    </GalleryItem>
          ))}
            </Gallery>
        )
    }
}