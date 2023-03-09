const initialState = {
    todos: [],
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "SET_TODOS":
        return {
          ...state,
          todos: action.payload,
        };
      case "TOGGLE_COMPLETED":
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload
              ? { ...todo, completed: !todo.completed }
              : todo
          ),
        };
      default:
        return state;
    }
  }
  