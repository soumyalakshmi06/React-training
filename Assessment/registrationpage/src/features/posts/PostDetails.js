import React from 'react';
import Box from '@mui/material/Box';
function PostDetails({ product }) {
  return (
    <Box sx={{ boxShadow: 1, m: 2, p: 2 }}>
      <div className='productWrap'>

        <div className='postDetails'>
          <h2>{product.title}</h2>
          <p>{product.body}</p>
        </div>
      </div>
    </Box>
    )
}
export default PostDetails