import { getPictures } from "api";
import { Component } from "react"
import { toast } from "react-toastify";


export class ImageGallery extends Component {
    state = {
        pictures:[],
        page: 1,
        status: 'idle',
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.input !== this.props.input) {
            this.setState({ status: 'pending' });
            getPictures(this.props.input, this.state.page).then(response => {
                if (response.length > 0) {
                    this.setState({pictures:[...response], status:'resolved'})
                } else {
                    toast.failure('Wrong request');
                    this.setState({ status: 'error' });
                }
            })
        }
    }
    
    render() {
        return (
            <ul class="gallery">
                {/* <!-- Набір <li> із зображеннями --> */}
            </ul>
        )
    }
}