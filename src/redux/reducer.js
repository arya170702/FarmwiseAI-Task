import { ADD_FIELD, REMOVE_FIELD } from './actions';

const initialState = {
  fields: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FIELD:
      return {
        ...state,
        fields: [...state.fields, action.payload],
      };
    case REMOVE_FIELD:
      return {
        ...state,
        fields: state.fields.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
