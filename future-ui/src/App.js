import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      currentKeyword: "",
    }
  }

  handleOnChange = e => {
    this.setState({ currentKeyword: e.target.value })
  }

  handleKeyPress = e => {
    const { tags, currentKeyword } = this.state;

    if(e.key === " " || e.key === "Enter") {
      this.setState({
        tags: [
          ...tags,
          { tag: currentKeyword }
        ],
        currentKeyword: ""
      })
    }
  }

  render() {
    const {
      tags,
      currentKeyword,
    } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FUTURE UI</h1>
        </header>
        <section>
          <input
            type="text"
            onKeyPress={this.handleKeyPress}
            onChange={this.handleOnChange}
            value={currentKeyword}
          />
        </section>
        <section>
          {tags.map((item, index) => (
            <div
              className="tag-box"
              key={index}
            >
              {item.tag}
            </div>
          ))}
        </section>
      </div>
    );
  }
}

export default App;
