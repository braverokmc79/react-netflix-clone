import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import "./Row.css";
import MovieModal from './MovieModal/index';

const Row = ({ isLargeRow, title, id, fetchUrl }) => {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});


    useEffect(() => {
        fetchMovieData();
    }, []);

    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
    }


    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);
    }


    return (
        <section className='row'>
            <h2>{title}</h2>
            <div className='slider'>
                <div className='slider_arrow-left' onClick={() => {
                    document.getElementById(id).scrollLeft -= window.innerWidth - 80;
                }}>
                    <span className='arrow' >{"<"}</span>
                </div>


                <div id={id} className="row_posters">
                    {
                        movies.map((movie) => {
                            return (
                                <div className='poster' key={movie.id} onClick={() => handleClick(movie)}>
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


                <div className='slider_arrow-right' onClick={() => {
                    document.getElementById(id).scrollLeft += window.innerWidth - 80;
                }}>
                    <span className='arrow'  >{">"}</span>
                </div>

            </div>


            {
                modalOpen &&

                <MovieModal  {...setMovieSelected} setModalOpen={setModalOpen} />
            }


        </section >
    );



};

export default Row;