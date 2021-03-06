import "./App.css";
import React, { Component } from "react";
import QuoteAndAuthor from "./components/QuoteAndAuthor.js";
import quotes from "./QuoteDB";

export default class App extends Component {
  //state
  state = {
    quote: quotes[0].quote,
    author: quotes[0].author,
    episode: quotes[0].episode,
  };

  //generate different quote function
  generateRandomQuote = (arr) => {
    //get random numbers
    let num = Math.floor(Math.random() * quotes.length);

    let newQuote = quotes[num];

    // update state
    this.setState({
      quote: newQuote.quote,
      author: newQuote.author,
      episode: newQuote.episode,
    });

    this.shuffleQuotes(quotes);
  };

  //shuffle quotes function
  shuffleQuotes = (arr) => {
    return arr.sort(function () {
      return 0.5 - Math.random();
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 className="title">
            the office <i>quotes</i>
          </h1>
        </div>
        <QuoteAndAuthor
          generateRandomQuote={this.generateRandomQuote}
          quote={this.state}
        />
      </div>
    );
  }
}
