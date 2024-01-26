// fieldReducer.js
const initialState = {
  fields: [],
  selectedUserType: '', // New state to store the selected user type
};

const fieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FIELD':
      return {
        ...state,
        fields: [...state.fields, action.payload],
      };
    case 'SET_USER_TYPE':
      return {
        ...state,
        selectedUserType: action.payload,
      };
    default:
      return state;
  }
};

export default fieldReducer;
