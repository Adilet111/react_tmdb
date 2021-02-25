import React, { useState } from 'react';

export default function Movie(props) {
    return (
        <article className="col-lg-3">
            <figure>
                <img className="img-fluid" src={`https://image.tmdb.org/t/p/original${props.movie.backdrop_path}`} alt="" />
                <div className="item-info">
                    <h3 className="item-title">{props.movie.original_title} </h3>
                    <p>{props.movie.overview}</p>
                    <p className="item-price">{props.movie.vote_average}</p>
                </div>
            </figure>
        </article>
    );
}