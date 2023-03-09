import { useState, useEffect } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));

    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => {
        const commentsByPostId = {};
        data.forEach((comment) => {
          const postId = comment.postId;
          if (postId in commentsByPostId) {
            commentsByPostId[postId].push(comment);
          } else {
            commentsByPostId[postId] = [comment];
          }
        });
        setComments(commentsByPostId);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Accordion key={post.id}>
          <AccordionSummary>
            <Typography>{post.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{post.body}</Typography>
            {comments[post.id]?.map((comment) => (
              <Accordion key={comment.id}>
                <AccordionSummary>
                  <Typography>{comment.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{comment.body}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
export default Posts;