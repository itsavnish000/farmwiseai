// fieldActions.js
export const addField = (field) => ({
  type: 'ADD_FIELD',
  payload: field,
});

export const setUserType = (userType) => ({
  type: 'SET_USER_TYPE',
  payload: userType,
});
