import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import axiosEn from '../../api/axiosEn';
import styled from 'styled-components';
import './DetailPage.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import GoMove from "../../components/GoMove";
import Advertisement from '../../components/Advertisement';

const HomeContainer = styled.div`
    width: 100%;
    height: auto;
   
`;

const Iframe = styled.iframe`
    width: 100%;
    height: 800px;
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

const DetailPage = ({setModalOpen}) => {
    let {movieId} =useParams();
    const navigate=useNavigate();
    const [movie, setMovie] = useState("");
    const [movieKey, setMovieKey] = useState("");
    const [requestError, setRequestError]=useState(false);


    const useQuery=()=>{
        return new URLSearchParams(useLocation().search);
    }

    let query =useQuery();
    const imgURL =query.get("imgURL");

    useEffect(() => {
        if (movieId) {
            movieDetail();
        }
    }, []);


    const movieDetail = async () => {
        //특정 영화의 더 상세한 정보를 가져오기 (비디오 정보도 포함)
        let request="";
        try{
            request= await axios.get(`movie/${movieId}`, {
                params: { append_to_response: "videos" }
            }) ;

        }catch(error){
           console.log("데이터 없음");
           setRequestError(true);
            return;
        }
      
        setMovie(request.data);
      
        
        //비디오가 없다면 다음을 실행해서 영어 데이터 가져오기
        if (request.videos === undefined) {
            const { data: movieDetailEn } = await axiosEn.get(`movie/${movieId}`, {
                params: { append_to_response: "videos" },
            });

            if(movieDetailEn.videos.results.length>0){
                setMovieKey(movieDetailEn.videos.results[0].key);
            }
           
        } else {
            if(request.videos.results.length>0){
                setMovieKey(request.videos.results[0].key);
            }
        }
    }

   

    if(requestError){
        return (
            <section className='section-detail'>
                <h1 className='section-detail-title'>상세 내용이 없습니다.</h1>
            </section>
        )
    }

    if (!movieId || !movie){
        return (
            <section className='section-detail'>
                <h1 className='section-detail-title'>...loading</h1>
            </section>
        )
    } 

  

    return (
      
    <section className='section-detail'>
        <img
                alt='User logged'
                src={`${process.env.PUBLIC_URL}/img/back.png`}
                className='nav_avatar_back'
                onClick={() => navigate(-1)}
        />


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
          src={`${movie.backdrop_path !==null ?  `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`  : `${imgURL}` }`}
          alt={movie.name}
       />

             <div className='modal_content'>
                     <p className='modal_details p2'>
                           <span className='modal_user_perc'>
                              100% for you &nbsp;
                           </span>
                           <span className='modal_user_release_date'>
                             개봉일: {movie.release_date ? movie.release_date : movie.first_air_date}
                          </span>
                        
                          <Advertisement  w={150} h={200} />

                       </p>

                     <h2 className='modal_title p2'>{movie.title ? movie.title : movie.name}</h2>
                     
                     <div className='go-moive'>
                            <GoMove title={movie.title}  name={movie.name} domain={"noonoo"}  webSiteName={"누누티비"}    />
                            <GoMove title={movie.title}  name={movie.name} domain={"peekle"}  webSiteName={"피클"}    />
                            <GoMove  title={movie.title}  name={movie.name} domain={"qooqootv"}  webSiteName={"쿠쿠티비"}   />
                            <GoMove  title={movie.title}  name={movie.name} domain={"tvchak"}  webSiteName={"티비착"}   />
                            <GoMove  title={movie.title}  name={movie.name} domain={"youtube"}  webSiteName={"유튜브"}   />
                            <GoMove  title={movie.title}  name={movie.name} domain={"kugabox"}  webSiteName={"쿠가박스"}   />
                            <GoMove  title={movie.title}  name={movie.name} domain={"koreanz"}  webSiteName={"코리안즈"}   />
                            <GoMove  title={movie.title}  name={movie.name} domain={"sonagitv"}  webSiteName={"소나기"}   />
                            <GoMove  title={movie.title}  name={movie.name} domain={"justlink"}  webSiteName={"저스트링크"}   />
                            <GoMove  title={movie.title}  name={movie.name} domain={"kokoa"}  webSiteName={"코코아"}   />
                      </div>

                     
                       <p className='modal_overview p-detaile'>평점 : {movie.vote_average}</p>
                       <p className='modal_overview p-detaile'>{movie.overview}</p>
                  </div>
    </section>

    );

    
};

export default DetailPage;

