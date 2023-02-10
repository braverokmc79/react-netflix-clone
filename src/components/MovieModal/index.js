import React, { useEffect, useState , useRef} from 'react';
import axios from '../../api/axios';
import axiosEn from '../../api/axiosEn';
import styled from 'styled-components';
import './MovieModal.css';
import GoMove from '../GoMove';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import Advertisement from '../Advertisement';

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


        console.log(" 디테일 :  " , movie);
        
        //비디오가 없다면 다음을 실행
        if (movie.videos === undefined) {
            const { data: movieDetailEn } = await axiosEn.get(`movie/${id}`, {
                params: { append_to_response: "videos" },
            });


            if(movieDetailEn.videos.results.length>0){
                setMovieKey(movieDetailEn.videos.results[0].key);
            }
           
        } else {
            if(movie.videos.results.length>0){
                setMovieKey(movie.videos.results[0].key);
            }
           
        }
    }


   //모달창 외부 클릭시 모달 닫게 
    const ref =useRef();
    useOnClickOutside(ref, ()=>{setModalOpen(false)});

    return (
        <div className='presentation'>
            <div className='wrapper-modal'  >
                <div className='modal' ref={ref}>
                  


                    {movieKey && <HomeContainer>
                        <Iframe
                            src={`https://www.youtube.com/embed/${movieKey}?controls=1&autoplay=1&loop=1&mute=0&playlist=${movieKey}&volume=5`}
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
                          개봉일:   {release_date ? release_date : first_air_date}
                        
                        {/* <span onClick={() => setModalOpen(false)} className="modal-close"> x</span>
                         */}

                        <Advertisement />

                        </p>

                      <div className='go-moive'>
                            <GoMove  title={title}  name={name} domain={"noonoo"}  webSiteName={"누누티비"}    />
                            <GoMove  title={title}  name={name} domain={"peekle"}  webSiteName={"피클"}    />
                            <GoMove  title={title}  name={name} domain={"qooqootv"}  webSiteName={"쿠쿠티비"}   />
                            <GoMove  title={title}  name={name} domain={"tvchak"}  webSiteName={"티비착"}   />
                            <GoMove  title={title}  name={name} domain={"youtube"}  webSiteName={"유튜브"}   />
                            <GoMove  title={title}  name={name} domain={"kugabox"}  webSiteName={"쿠가박스"}   />
                            <GoMove  title={title}  name={name} domain={"koreanz"}  webSiteName={"코리안즈"}   />
                            <GoMove  title={title}  name={name} domain={"sonagitv"}  webSiteName={"소나기"}   />
                            <GoMove  title={title}  name={name} domain={"justlink"}  webSiteName={"저스트링크"}   />
                            <GoMove  title={title}  name={name} domain={"kokoa"}  webSiteName={"코코아"}   />
                      </div>
                    
                      


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