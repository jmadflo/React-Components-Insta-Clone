// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";

const SearchBar = ({renderedData, setRenderedData, originalData}) => {
  const searchData = event => {
    if (event.target.value !== ""){
      let filteredPosts = renderedData.filter(post => {
        let commentsText = post.comments.map(comment => comment.text)
        commentsText = commentsText.join('')
        return post.username.includes(event.target.value) || commentsText.includes(event.target.value)
      })
      setRenderedData(filteredPosts)
    } else {
      setRenderedData(originalData)
    }
    
  }
  
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <i className="fab fa-instagram" />
      </div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
          onChange={searchData}
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
