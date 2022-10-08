import { Component } from "react"


export class ImageGallery extends Component {
    state = {
    gallery: [],
    modalImg: '',
    isLoader: false,
    isModal: false,
    }
    
    componentDidUpdate(prevProps) {
        
    }
    
    render() {
        return (
            <ul class="gallery">
                {/* <!-- Набір <li> із зображеннями --> */}
            </ul>
        )
    }
}