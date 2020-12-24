import React from "react";
import quotes from "../QuoteDB";
import Button from "@material-ui/core/Button";

export default function QuoteAndAuthor(props) {
  const { quote, generateRandomQuote } = props;
  return (
    <div>
      <div className="card">
        <p>
          <i>
            <q>{quote.quote}</q>
          </i>
        </p>

        <p className="author-text">
          {quote.author} {quote.episode}
        </p>
      </div>
      <div className="submitButton">
        <Button
          variant="contained"
          onClick={() => {
            generateRandomQuote(quotes);
          }}
          type="submit"
        >
          That's What She Said
        </Button>
      </div>
    </div>
  );
}
