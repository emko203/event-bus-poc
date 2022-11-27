import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";
 
function App(){
    return <div className="container">
        <h1>Post Create</h1>
        <PostCreate></PostCreate>
        <hr />
        <h1>Post</h1>
        <PostList></PostList>
    </div>
  };
 
export default App;