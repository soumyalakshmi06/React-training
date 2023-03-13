import React from 'react';

const Comment = ({ name, email, body }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{body}</p>
    </div>
  );
};

export default Comment;
