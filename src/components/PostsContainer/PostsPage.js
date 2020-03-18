//Complete the necessary code in this file
// import useState
import React, { useState }from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import userData from "../../dummy-data";

const PostsPage = (props) => {
  // set up state for your data
  const [data] = useState(userData);
  let posts = [];
  
  posts = data.map((singlePost, index) => <Post postContent={singlePost} key={index}/>)
  if (props.searchText === "") {
    posts = posts.filter(post => post.username.includes(props.searchText))
  }

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */
        posts
      }
    </div>
  );
};

export default PostsPage;

