import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import "./Row.css";

const Row = ({ isLargeRow, title, id, fetchUrl }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovieData();
    }, []);

    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
    }

    console.log("title : ", movies);


    return (
        <section className='row'>
            <h2>{title}</h2>
            <div className='slider'>
                <div className='slider_arrow-left'>
                    <span className='arrow'>{"<"}</span>
                </div>


                <div id={id} className="row_posters">
                    {
                        movies.map((movie) => {
                            return (
                                <div className='poster' key={movie.id}>
                                    <img

                                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                                        src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                        alt={movie.name}
                                    />
                                    <span className='movie_name'>{movie.name || movie.title}</span>
                                </div>
                            )

                        })
                    }
                </div>


                <div className='slider_arrow-right'>
                    <span className='arrow'>{">"}</span>
                </div>

            </div>
        </section>
    );



};

export default Row;