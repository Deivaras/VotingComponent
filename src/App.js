import React, { useState } from "react";
import "./styles.css";
import Voting from "./components/Voting";

export default function App() {
  const [likeCount, setLikeCount] = useState(2);
  const voteUp = () => {
    setLikeCount(likeCount + 1);
  };
  return (
    <div className="App">
      <h1>My Voting</h1>
      <Voting
        likeCount={likeCount}
        upVote={voteUp}
        downVote={() => setLikeCount(likeCount - 1)}
      />
    </div>
  );
}
