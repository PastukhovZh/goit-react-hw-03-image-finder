import { Component } from "react";
import { toast } from "react-toastify";


export class Searchbar extends Component {
  
  state = {
    search: '',
  };

handleInput = e => {
    this.setState({ search: e.currentTarget.value.toLowerCase().trim() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.search === '') {
      toast.error('write something');
      return;
    }
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };

  render() {
      return (
        <header className="searchbar">
  <form className="form" onSubmit={this.handleSubmit}>
    <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>

    <input
      className="input"
      type="text"
      autoComplete="off"
              autoFocus
              value={this.state.search}
            onChange={this.handleInput}
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
    }
}