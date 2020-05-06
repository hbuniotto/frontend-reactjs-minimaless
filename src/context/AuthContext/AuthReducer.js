import isEmpty from "./is-empty";

export default function(state, action) {
    switch (action.type) {
      case 'SET_CURRENT_USER':
        return {
          ...state,
          isAuthenticated: !isEmpty(action.payload),
          user: action.payload
        };
        case 'GET_PROFILE':
          return {
              ...state,
              profile: action.payload
          };
      case 'SENDING_REQUEST':
        return {
            ...state,
            loading: true
        };
      case 'REQUEST_FINISHED':
          return {
              ...state,
              loading: false
          };
      case 'STATE_CHANGE':
          return {
              ...state,
              profileChange: action.payload
          };
      case 'GET_ERRORS': 
        return {
          ...state,
          emailError: action.payload,
        };
      default:
        return state;
    }
  }
  