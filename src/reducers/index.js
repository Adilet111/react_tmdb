import moviesReducer from './movies';
import inputMovieReducer from './inputMovie';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    inputMovie: inputMovieReducer,
    movies: moviesReducer
})

export default allReducers;