/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, { useState } from "react";
import "./App.css";
// import the PostsPage and SearchBar and add them to the App
import PostsPage from "./components/PostsContainer/PostsPage";
import SearchBar from "./components/SearchBar/SearchBarContainer";
import completeDummyData from "./dummy-data"

const App = () => {
  const [renderedData, setRenderedData] = useState(completeDummyData);
 
  return (
    <div className="App">
      <SearchBar originalData={completeDummyData}renderedData={renderedData} setRenderedData={setRenderedData}/>
      <PostsPage renderedData={renderedData} />
    </div>
  );
};

export default App;
