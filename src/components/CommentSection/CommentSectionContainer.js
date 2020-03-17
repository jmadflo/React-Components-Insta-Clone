// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments/*, changeComments*/] = useState(props.comments)
  // console.log(comments)
  // const addComment = (newCommentText) => {
  //   let newComment = [{
  //     username: 'New User',
  //     text: newCommentText
  //   }]
  //   changeComments(comments.join(newComment))
  // }

  return (
    <div>
      {/* map through the comments data and return the Comment component */
      comments.map((singleComment, index) => <Comment comment={singleComment} key={index}/>)
      }<CommentInput /*submitComment={addComment}*//>
      
      
    </div>
  );
};

export default CommentSection;
