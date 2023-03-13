import React from 'react';

const Post = ({ title, body }) => {
  return (
    <div>
      <h2>{`Title: ${title}`}</h2>
      <p>{`Body: ${body}`}</p>
     
    </div>
     
  );
};

export default Post;
