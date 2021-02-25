const getMovies = () =>{
    return {
        type:'GET_MOVIES'
    }
}
export const getInputMovie = ()=>{
    return {
        type: 'GET_INPUT_MOVIE'
    }
}
export const getTotalPages = ()=>{
    return {
        type: 'GET_TOTAL_PAGES'
    }
}

export default getMovies;