const inputMovieReducer = (state='',action) => {
    switch(action.type){
        case 'GET_INPUT_MOVIE':
            return action.payload;
        default:
            return state;
    }
}
export default inputMovieReducer;