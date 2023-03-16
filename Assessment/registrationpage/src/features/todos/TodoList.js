import React from 'react'
import TodoDetails from './TodoDetails'
function TodoList({ list }) {
  return (
    <>            {
      list.map(item =>
        <TodoDetails product={item} key={item.id} />
      )
    }
    </>)
}
export default TodoList