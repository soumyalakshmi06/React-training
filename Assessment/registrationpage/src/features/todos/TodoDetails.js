import React from 'react';
import Box from '@mui/material/Box';
function TodoDetails({ product }) {
  return (
    <Box sx={{ boxShadow: 1, m: 2, p: 2 }}>
      <div className='productWrap'>
        <div className='todoDetails'>
          <h2>{product.title}</h2>
          <p>{product.completed}</p>
        </div>
      </div>
    </Box>)
}
export default TodoDetails