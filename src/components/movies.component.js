import React, { useState } from 'react';
import Movie from "./movie.component";
import {useSelector, useDispatch} from 'react-redux';


export default function Movies() {
    const movies = useSelector(state => state.movies)
    return (
        <div className="main">
            <div className="content-container row">
                {movies.map((movie)=>{
                    return (<Movie movie = {movie}/>)
                })}
                
            </div>
        </div>
    );
}