import { Component } from "react";
import { toast } from "react-toastify";
import { Form,SearchbarWrap, SearchFormButton, SearchFormInput, SearchFormLabel } from "./Searchbar.styled";


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
        <SearchbarWrap>
  <Form className="form" onSubmit={this.handleSubmit}>
    <SearchFormButton type="submit">
      <SearchFormLabel>Search</SearchFormLabel>
    </SearchFormButton>

    <SearchFormInput
      type="text"
      autoComplete="off"
              autoFocus
              value={this.state.search}
            onChange={this.handleInput}
      placeholder="Search images and photos"
    />
  </Form>
</SearchbarWrap>
    )
    }
}

