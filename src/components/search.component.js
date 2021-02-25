import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import store from '../store';
import getMovies from "../actions"
const axios = require('axios');




export default function Search() {
    const [inputMovie, setInputMovie] = useState("");
    const [movies, setMovies] = useState([]);
    const dispatch = useDispatch();
    const api_key = "api_key="+"<your api goes here>"
    const handleChange = (event) => {
        setInputMovie(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            let url = 'https://api.themoviedb.org/3/search/movie?'+api_key+ '&language=en-US&query=' + inputMovie;
            const response = await axios.get(url)
            dispatch({ type: 'GET_MOVIES', payload: response.data.results })
            dispatch({type:'GET_INPUT_MOVIE', payload: inputMovie})
            dispatch({type:'GET_TOTAL_PAGES', payload: response.data.total_pages})
            console.log(response)
            setInputMovie('')
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className="input-container">
            <form>
                <label htmlFor="movieTitle">Enter movie title:</label>
                <input className="movie-input"
                    type="text"
                    name="movieTitle"
                    value={inputMovie}
                    onChange={(e) => { handleChange(e) }}
                />
            </form>
            <button className="btn btn-primary" onClick={() => { handleSubmit() }}>search</button>
        </div>
    );
}
