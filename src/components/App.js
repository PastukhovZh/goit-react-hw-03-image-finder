import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { Component } from "react";
import { ToastContainer } from "react-toastify";

export class App extends Component {
  state = {
input:''
}
handleSubmit = e => {
    this.setState({ input: e });
  };
  
  render() {
    return (
      <div>
      <Searchbar onSubmit ={this.handleSubmit} />
      <ImageGallery input={this.state.input} />
      <ToastContainer autoClose={3000} />
      </div>
  )
  };
};
