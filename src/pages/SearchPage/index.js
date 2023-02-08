import axios from '../../api/axios';
import axiosEn from '../../api/axiosEn';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
/** useLocation 값들
hash: ""
key: "8eqba7lc"
pathname:"/search"
search: "?q=d"
state:null
 **/ 


function SearchPage() {
  const [searchResults, setSearchResults] =useState([]);

  const useQuery =()=>{
    return new URLSearchParams(useLocation().search);
  }

  let query =useQuery();
  const searchTerm =query.get("q");
  console.log('searchTerm', searchTerm);

  useEffect(()=>{
    if(searchTerm){
      fetchSearchMovie(searchTerm);
    }
  }, []);


  const fetchSearchMovie= async (searchTerm)=>{
     try{
      const request = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);

      console.log(request);

     }catch(error){
        console.log("error", error);
     }
  }




  
  return (
    <div>index</div>
  )


}

export default SearchPage