import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="City, State or Zip Code" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;