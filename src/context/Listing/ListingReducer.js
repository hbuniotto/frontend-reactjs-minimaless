export default (state, action) => {
    switch (action.type) {
        case 'GET_LISTS':
            return {
                ...state,
                lists: action.payload
            };
        // case 'SET_POST':
        //     return {
        //         ...state,
        //         currentBlogPost: action.payload
        //     };
        case 'ADD_LIST':
            return {
                ...state,
                lists: [action.payload, ...state.lists]
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
        default:
            return state;
    }
};