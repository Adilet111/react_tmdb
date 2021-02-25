export default  function totalPagesReducer(state=[],action) {
    switch(action.type){
        case 'GET_TOTAL_PAGES':
            return action.payload;
        default:
            return state;
    }
}