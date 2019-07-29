import React, { Component } from "react";
import "./App.css";
import { Cardslist } from "./components/cards-list/cards-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lads: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState({
          lads: users
        })
      );
  }
  render() {
    const filteredLads = this.state.lads.filter(lad => {
      const nameMatch = lad.name.toLowerCase().includes(this.state.searchField);
      const emailMatch = lad.email
        .toLowerCase()
        .includes(this.state.searchField);
      return nameMatch || emailMatch ? lad : null;
    });
    return (
      <div className="App">
        <h1 id="title">WORKBOX</h1>
        <SearchBox
          placeholder="enter lad name"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <Cardslist lads={filteredLads} />
      </div>
    );
  }
}

export default App;
