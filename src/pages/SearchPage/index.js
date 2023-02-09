import axios from '../../api/axios';
import axiosEn from '../../api/axiosEn';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './SearchPage.css';
import { useDebounce } from '../../hooks/useDebounce';


/** useLocation 값들
hash: ""
key: "8eqba7lc"
pathname:"/search"
search: "?q=d"
state:null
 **/ 


function SearchPage() {
  const [searchResults, setSearchResults] =useState([]);
  const navigate =useNavigate();
 

  const useQuery =()=>{
    return new URLSearchParams(useLocation().search);
  }

  let query =useQuery();
  const searchTerm =query.get("q");
  const debounceTerm =useDebounce(searchTerm, 500);
 

  useEffect(()=>{
    if(debounceTerm){
      fetchSearchMovie(debounceTerm);
    }
  }, [debounceTerm]);


  const fetchSearchMovie= async (debounceTerm)=>{
    // console.log("debounceTerm : ", debounceTerm);
     try{
      const request = await axios.get(`/search/multi?include_adult=false&query=${debounceTerm}`);
      setSearchResults(request.data.results);
     }catch(error){
        console.log("error", error);
     }
  }

  
  const renderSearchResults=()=>{

    return searchResults.length >0 ? (
      <section className='search-container'>
        {searchResults.map((movie)=>{
            if(movie.backdrop_path !==null && movie.media_type !== "person"){
              const movieImageUrl = "https://image.tmdb.org/t/p/w500"+movie.backdrop_path ;
              return (

                  <div className='movie' key={movie.id}>
                      <div className='movie_column-poster' onClick={()=>navigate(`/movie/${movie.id}?imgURL=${movieImageUrl}`)}>
                          <img src={movieImageUrl}  alt="movie" className='movie_poster' />
                          <span className='search_movie_name'>{movie.name || movie.title} (평점 : {movie.vote_average})</span>
                      </div>
                  </div>
              );

            }

        })}
   
        
      </section> ) :
  
    
      <section className='no-results'>
          <div className='no-results_text'>
          <p>
              찾고자하는 검색어 "{debounceTerm}"에 맞는 영화가 없습니다.
          </p>
          </div>

      </section>

       
    
  }

  return renderSearchResults();


}

export default SearchPage