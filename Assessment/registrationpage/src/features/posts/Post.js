import React, { useEffect, useState } from "react";
import axios from "axios";
import PostList from "./PostList";
import SideNavbar from "../../common/side-navbar/SideNavbar";
const baseURL = " https://jsonplaceholder.typicode.com/posts";
function Post() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPostList(response.data);
    });
  }, [])
  return (
    <div className="contentWrap">
      <SideNavbar />
      <div className="listItems">
        <PostList list={postList} />
      </div>
    </div>
  );
}
export default Post;