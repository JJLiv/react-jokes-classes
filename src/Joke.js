import React, { Component } from "react";
import "./Joke.css";

/** A single joke, along with vote up/down buttons. */

function Joke({ id, vote, votes, text }) {
  
  const handleUpVote = (evt) => {
    evt.persist();
    vote(id, +1)
  }

  const handleDownVote = (evt) => {
    evt.persist();
    vote(id, -1)
  }

    return (
      <div className="Joke">
        <div className="Joke-votearea">
          <button onClick={handleUpVote}>
            <i className="fas fa-thumbs-up" />
          </button>

          <button onClick={handleDownVote}>
            <i className="fas fa-thumbs-down" />
          </button>

          {votes}
        </div>

        <div className="Joke-text">{text}</div>
      </div>
    );
}


export default Joke;
