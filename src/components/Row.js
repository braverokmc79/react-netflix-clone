import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import "./Row.css";
import MovieModal from './MovieModal/index';


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Loading from './Loading';



const Row = ({ isLargeRow, title, id, fetchUrl , setLoading }) => {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});
  
 

    useEffect(() => {
        fetchMovieData();
    
        if(id==="DM"){
            setTimeout(()=>{
                setLoading(false);
            }, 100)
          
        }
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
        

        <section className='row' id={id}>
            <h2>{title}</h2>
            {/* <div className='slider'>
                <div className='slider_arrow-left' onClick={() => {
                    document.getElementById(id).scrollLeft -= window.innerWidth - 80;
                }}>
                    <span className='arrow' >{"<"}</span>
                </div> */}
  <Swiper 
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true} // loop 기능을 사용할 것인지
        breakpoints={{
          1378: {
            slidesPerView: 6, // 한번에 보이는 슬라이드 개수
            slidesPerGroup: 6, // 몇개씩 슬라이드 할지
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        navigation  // arrow 버튼 사용 유무 
        pagination={{ clickable: true }} // 페이지 버튼 보이게 할지 
      >

                <div id={id} className="row_posters">
                    {
                        movies.map((movie, index) => {
                         
                        if((isLargeRow ? movie.poster_path : movie.backdrop_path)!==null){
                             

                                return (
                                    <SwiperSlide  key={movie.id}>
                                        <div className={`poster ${isLargeRow !==undefined? "posterLarge" : "general" }`} onClick={() => handleClick(movie)}>
                                            <img
        
                                                className={`row_poster ${isLargeRow !==undefined? "row_posterLarge" : "row_general"}`}
                                                src={`https://image.tmdb.org/t/p/original${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                                alt={movie.name}
                                            />
                                            <span className='movie_name'>{movie.name || movie.title} (평점 : {movie.vote_average})</span>
                                        </div>
                                    </SwiperSlide>

                                )
                              
                            }


                        })
                    }
                </div>


                {/* <div className='slider_arrow-right' onClick={() => {
                    document.getElementById(id).scrollLeft += window.innerWidth - 80;
                }}>
                    <span className='arrow'  >{">"}</span>
                </div> */}

      </Swiper>


            {
                modalOpen &&

                <MovieModal  {...movieSelected} isLargeRow={isLargeRow} setModalOpen={setModalOpen} />
            }


           
        </section >
    );



};

export default Row;