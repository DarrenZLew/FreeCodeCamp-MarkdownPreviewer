import React, { Component } from 'react';
import marked from 'marked';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '# Welcome to my Markdown Live Editor\n\n---\n### What is Markdown?\nsee [Wikipedia](https://en.wikipedia.org/wiki/Markdown)\n\n> Markdown is a lightweight markup language, originally created by John Gruber and Aaron Swartz allowing people "to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)".\n\n---\n### Usage:\nWrite some markdown text in this text area for practice.\n\n---\n### Markdown Cheatsheet:\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nLinks: [FreeCodeCamp](https://www.freecodecamp.com)'
    };

    this.handleChange = this.handleChange.bind(this);
    this.getMarkdownText = this.getMarkdownText.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  getMarkdownText(ele) {
    var rawMarkup = marked(ele, {sanitize: true});
    return { __html: rawMarkup};
  }

  render() {
    return (
      <div>
        <textarea 
          value={this.state.value}
          rows="52"
          cols="60"
          onChange={this.handleChange} />
        <div className='container' dangerouslySetInnerHTML={this.getMarkdownText(this.state.value)} />
      </div>
    );
  }
}

export default App;
