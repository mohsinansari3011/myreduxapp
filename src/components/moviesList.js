import React from 'react';

const MoviesList = (props) => {


const renderMovies = (movies) =>(
    movies ?
        movies.map((item,i) => (
        <div key={i}>{item.name}</div>
    )) : null
)

const renderLatestMovies = (movies) => (
    movies ?
        movies.map((item, i) => (
            <div key={i}>{item.name}</div>
        )) : null
)

    console.log(props)
    return (
        <div>
            {renderLatestMovies(props.data.movies)}
        </div>
    );
};

export default MoviesList;