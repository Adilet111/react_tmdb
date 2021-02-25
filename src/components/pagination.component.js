import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import {useSelector, useDispatch} from 'react-redux';
const axios = require('axios')

export default function Pagination(props) {
    const [page, setPage] = useState(0);
    const pages = useSelector(state => state.movies.pages)
    const inputMovie = useSelector(state => state.inputMovie);
    const dispatch = useDispatch();

    const getData = async () =>{
        try {
            let url = 'https://api.themoviedb.org/3/search/movie?'+ api_key_'&language=en-US&query=' + inputMovie;
            url+='&page='+page;
            const response = await axios.get(url)
            dispatch({ type: 'GET_MOVIES', payload: response.data.results, pages: response.data.total_pages })
        } catch (error) {
            console.log(error);
        }
    }
    const handlePageClick = async (e) => {
        console.log(e.selected)
        const selectedPage = e.selected;
        setPage(selectedPage)
        await getData()
    };

    return (
        <div>
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={pages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={(event)=>{handlePageClick(event)}}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>
    );
}
