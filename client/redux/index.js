import axios from 'axios';

const initialState = {
  user: {},
};

const GET_USER = 'GET_USER';

const gotMe = user => ({
  type: GET_USER,
  user,
});

export const getMe = () => dispatch => {
  return axios
    .get('/me')
    .then(res => res.data)
    .then(user => dispatch(gotMe(user)))
    .catch(console.error.bind(console));
};

export const login = formData => dispatch => {
  return axios
    .put('/login', formData)
    .then(res => res.data)
    .then(user => dispatch(gotMe(user)))
    .catch(console.error.bind(console));
};

const dummyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default dummyReducer;
