export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";

export function addTodo(title) {
  return {
    type: ADD_TODO,
    payload: {
      title,
      id: new Date().getTime(),
    },
  };
}

export function editTodo(id, title) {
  return {
    type: EDIT_TODO,
    payload: {
      id,
      title,
    },
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
}