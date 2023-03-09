// action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// action creators
let nextTodoId = 0;

export function addTodo(text) {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  };
}
export const setTodos = (todos) => {
  return {
    type: "SET_TODOS",
    payload: todos,
  };
};


export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}
export const toggleCompleted = (id) => {
  return {
    type: 'TOGGLE_COMPLETED',
    payload: id
  }
}


export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
}
