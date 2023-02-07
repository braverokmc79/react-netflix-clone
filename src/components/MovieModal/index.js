import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import axiosEn from '../../api/axiosEn';
import styled from 'styled-components';
import './MovieModal.css';

const HomeContainer = styled.div`
    width: 100%;
    height: auto;
   
`;

const Iframe = styled.iframe`
    width: 100%;
    height: 500px;
    z-index: -1;
    opacity: 0.65;
    border: none;

    &::after{
       content:"" ;
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 200;       
    }
`;

const MovieModal = ({
    isLargeRow,
    id,
    backdrop_path,
    title,
    overview,
    name,
    release_date,
    first_air_date,
    vote_average,
    setModalOpen
}) => {

    const [movieKey, setMovieKey] = useState("");

    useEffect(() => {
        if (!isLargeRow) {
            movieDetail();
        }

    }, []);

    const movieDetail = async () => {

        //특정 영화의 더 상세한 정보를 가져오기 (비디오 정보도 포함)
        const movie = await axios.get(`movie/${id}`, {
            params: { append_to_response: "videos" }
        })



        //비디오가 없다면 다음을 실행
        if (movie.videos === undefined) {
            const { data: movieDetailEn } = await axiosEn.get(`movie/${id}`, {
                params: { append_to_response: "videos" },
            });
            setMovieKey(movieDetailEn.videos.results[0].key);
        } else {
            setMovieKey(movie.videos.results[0].key)
        }
    }

    console.log("영화 movie : ", movieKey);

    return (
        <div className='presentation'>
            <div className='wrapper-modal' onClick={() => setModalOpen(false)} >
                <div className='modal'>
                    <span onClick={() => setModalOpen(false)} className="modal-close">
                        x
                    </span>


                    {movieKey && <HomeContainer>
                        <Iframe
                            src={`https://www.youtube.com/embed/${movieKey}?controls=1&autoplay=1&loop=1&mute=0&playlist=${movieKey}`}
                            title="YouTube video player"
                            frameborder="0"
                            allow="autoplay; fullscreen"
                            allowfullscreen
                        ></Iframe>
                    </HomeContainer>

                    }

                    <img
                        className='modal_poster-img'
                        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                        alt={name}
                    />

                    <div className='modal_content'>
                        <p className='modal_details'>
                            <span className='modal_user_perc'>
                                100% for you &nbsp;
                            </span>
                            {release_date ? release_date : first_air_date}
                        </p>

                        <h2 className='modal_title'>{title ? title : name}</h2>
                        <p className='modal_overview'>평점 : {vote_average}</p>
                        <p className='modal_overview'>{overview}</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default MovieModal;