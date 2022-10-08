import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Seachbar } from "./Searchbar/Searchbar";
import { Button } from "./Button/Button"
import { Component } from "react";
import { getPictures } from "api";

export class App extends Component {
  state = {
    page: 1,
    query: '',
    loadMore: null,
}

  async componentDidMount() {
  try {
      // this.setState({ isLoadingBreeds: true });
      const pictures = await getPictures();
      this.setState({ pictures });
    } catch {
      this.setState({ error: 'Failed to load breeds :(' });
  }
  // finally {
  //     this.setState({ isLoadingBreeds: false });
  //   }
}
  
  render() {
    return (
      <div>
      <Seachbar />
      <ImageGallery />
      <Button />
    </div>
  )
  };
};
