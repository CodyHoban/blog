export const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            console.log(action);
            return action.payload;
        default:
            return state;
    }
};
