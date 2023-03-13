import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo) {
      addTodo({
        id: new Date().getTime(),
        text: todo,
        completed: false,
      });
      setTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        placeholder="Add a new todo"
        onChange={(event) => setTodo(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
