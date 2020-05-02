import isEmpty from "./is-empty";

export default function(state, action) {
    switch (action.type) {
      case 'SET_CURRENT_USER':
        return {
          ...state,
          isAuthenticated: !isEmpty(action.payload),
          user: action.payload
        };
      case 'GET_ERRORS': 
        return {
          ...state,
          emailError: action.payload,
        }
      default:
        return state;
    }
  }
  