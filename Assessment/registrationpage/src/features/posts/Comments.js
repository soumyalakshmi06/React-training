import React, { useState, useEffect } from 'react';
import Comment from './Comment';

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => setComments(data));
  }, []);

  return (
    <div>
      <h2>Comments</h2>
      {comments.map(comment => (
        <Comment key={comment.id} name={comment.name} email={comment.email} body={comment.body} />
      ))}
    </div>
  );
};

export default Comments;
