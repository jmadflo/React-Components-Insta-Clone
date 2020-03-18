// You do not need to do anything in this file
import React, { useState } from 'react';

const CommentInput = props => {
  const [text, changeText] = useState("");
  return (
    <form className="comment-form" >
      <input
        type="text"
        value={text}
        placeholder="Add comment... "
        onChange={(event => changeText(event.target.value))}
      />
    </form>
  );
};

export default CommentInput;
