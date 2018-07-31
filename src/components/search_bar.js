import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = { term: "" };
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="City, State or Zip Code"
            value={this.state.term}
            onChange={event => this._onInputChange(event.target.value)}
          />
          <button
            type="submit"
            onClick={event => {
              event.preventDefault();
              this._onFormSubmit();
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

//When the user types a zipcode, the term gets updated
  _onInputChange = term => {
    this.setState({ term });
  };

//when the user clicks submit, the search term gets sent back up to Weather.js
  _onFormSubmit = () => {
    this.props.handleSubmit(this.state.term);
  };
}

export default SearchBar;
