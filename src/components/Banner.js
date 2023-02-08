import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import axiosEn from '../api/axiosEn';
import requests from '../api/requests';
import './Banner.css';
import styled from 'styled-components';
import GoMove from './GoMove';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background:black;
`;

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
   
`;

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.65;
    border: none;

    &::after{
       content:"" ;
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;       
    }
`;

const Banner = () => {
    const [movie, setMovie] = useState([]);
    const [movieKey, setMovieKey] = useState("");
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        //현재 상영중인 영화 정보를 가져오기(여러 영화)
        const request = await axios.get(requests.fetchNowPlaying);

        const results = request.data.results.filter(data => {
            return data.overview.length > 1
        })

        //console.log(" results", results);

        //여러 영화 중 영화 하나의 ID 를 가져오기
        const movieId = results[Math.floor(Math.random() * results.length)].id;

        //특정 영화의 더 상세한 정보를 가져오기 (비디오 정보도 포함)
        const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
            params: { append_to_response: "videos" },
        });

        setMovie(movieDetail);


        //비디오가 없다면 다음을 실행
        if (movie.videos === undefined) {
            const { data: movieDetailEn } = await axiosEn.get(`movie/${movieId}`, {
                params: { append_to_response: "videos" },
            });
            setMovieKey(movieDetailEn.videos.results[0].key);
        } else {
            setMovieKey(movie.videos.results[0].key)
        }

    };

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }



    if (!isClicked) {
        return (
            movie.backdrop_path && <header
                className="banner"
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                    backgroundPosition: "top center",
                    backgroundSize: "cover",
                }}
            >
                <div className="banner_contents">
                    <h1 className="banner_title">
                        {movie.title || movie.name || movie.original_name}
                    </h1>

                    <div className="banner_buttons">
                        <button className="banner_button play" onClick={() => setIsClicked(true)}>
                            Play
                        </button>

                        <button className="banner_button info">More Information</button>
                    </div>
                    <div className='go-moive'>
                            <GoMove title={movie.title}  name={movie.name} domain={"peekle"}  webSiteName={"피클"}    />
                            <GoMove  title={movie.title}  name={movie.name} domain={"qooqootv"}  webSiteName={"쿠쿠티비"}   />
                            <GoMove  title={movie.title}  name={movie.name} domain={"youtube"}  webSiteName={"유튜브"}   />
                            <GoMove  title={movie.title}  name={movie.name} domain={"kugabox"}  webSiteName={"쿠가박스"}   />
                            <GoMove  title={movie.title}  name={movie.name} domain={"koreanz"}  webSiteName={"코리안즈"}   />
                            <GoMove  title={movie.title}  name={movie.name} domain={"sonagitv"}  webSiteName={"소나기"}   />
                            <GoMove  title={movie.title}  name={movie.name} domain={"justlink"}  webSiteName={"저스트링크"}   />
                      </div>

                    <h1 className="banner_description">
                        {truncate(movie.overview, 100)}
                    </h1>
                </div>
                <div className="banner--fadeBottom" />
            </header>
        );

    } else {


        return (
            <Container >
                <HomeContainer>
                    <Iframe
                        width="640"
                        height="360"
                        src={`https://www.youtube.com/embed/${movieKey}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movieKey}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="autoplay; fullscreen"
                        allowfullscreen
                    ></Iframe>
                </HomeContainer>

            </Container >

        );
    }
};

export default Banner;