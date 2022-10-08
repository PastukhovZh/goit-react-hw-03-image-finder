import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from "./Searchbar/Searchbar";
import { Button } from "./Button/Button"
import { Component } from "react";

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
      <Button />
    </div>
  )
  };
};
