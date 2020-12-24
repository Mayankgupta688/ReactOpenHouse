export default function moviesReducer(state = [], action) {
    debugger;
    if(action.type === "ADD_MOVIE_LIST") {
        return action.payload;
    }

    return state;
}