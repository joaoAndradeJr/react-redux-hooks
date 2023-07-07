import { LOGIN } from '../../utils/types';

const initialState = {
  name: '',
};

export default function user(state = initialState, action) {
  switch (action.type) {
  case LOGIN:
    return { ...state, name: action.payload };
  default:
    return state;
  }
}
