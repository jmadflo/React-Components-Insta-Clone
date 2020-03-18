// You will add code in this file
import React, { useState, useEffect }from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = props => {
  let { username, thumbnailUrl, imageUrl, comments, likes} = props.postContent;
  // set up state for the likes
  const [numLikes, setNumLikes] = useState(likes);
  const [isLiked, setIsLiked] = useState(false)
  const [currentComments, setCurrentComments] = useState(comments)

  useEffect(() => {
    setNumLikes(likes)
    setCurrentComments(comments)
  }, [likes, comments])

  const changeNumLikes = () => {
    isLiked ? setNumLikes(numLikes - 1) : setNumLikes(numLikes + 1)
    setIsLiked(!isLiked);
  }
  return (
    <div className="post-border">
      <PostHeader
        username={username}
        thumbnailUrl={
          thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={imageUrl}
        />
      </div>
      <LikeSection likes={numLikes} likeChanger={changeNumLikes}/>
      <CommentSection
        postId={imageUrl}
        currentComments={currentComments}
      />
      
    </div>
  );
};

export default Post;


