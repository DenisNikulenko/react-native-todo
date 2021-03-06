import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../types";

const handlers = {
  [ADD_TODO]: (state, action) => ({ // (state, action) - (state, { title })
    ...state,
    todos: [
      ...state.todos,
      {
        id: Date.now().toString(),
        title: action.title,
      },
    ],
  }),

  [REMOVE_TODO]: (state, action) => ({ // (state, { id })
    ...state,
    todos: state.todos.filter((todo) => todo.id !== action.id),
  }),

  [UPDATE_TODO]: (state, action) => ({ // (state. { id, title })
    ...state,
    todos: state.todos.map((todo) => {
      if (todo.id === action.id) {
        todo.title = action.title;
      }
      return todo;
    }),
  }),

  DEFAULT: state => state 
};

export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action)
}



// export const todoReducer = (state, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             id: Date.now().toString(),
//             title: action.title,
//           },
//         ],
//       };
//     case REMOVE_TODO:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.id),
//       };
//     case UPDATE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo) => {
//           if (todo.id === action.id) {
//             todo.title = action.title;
//           }
//           return todo;
//         }),
//       };
//     default:
//       return state;
//   }
// };
