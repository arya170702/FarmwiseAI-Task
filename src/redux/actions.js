// actions.js
export const ADD_FIELD = 'ADD_FIELD';
export const REMOVE_FIELD = 'REMOVE_FIELD';

export const addField = (field) => ({
  type: ADD_FIELD,
  payload: field,
});

export const removeField = (index) => ({
  type: REMOVE_FIELD,
  payload: index,
});
