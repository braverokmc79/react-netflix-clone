import React, { useState } from 'react'
import requests from '../../api/requests'
import Banner from '../../components/Banner'
import Loading from '../../components/Loading';
import Row from '../../components/Row'

function MainPage() {
  const [loading, setLoading] =useState(true);

  return (
    <div>
      
        <Banner />
        <div style={{height:"150px"}}></div>
        <Row
        title="넷플릭스 오리지널"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
        setLoading={setLoading}

      
        />

        <Row title="최신인기 영화" id="TN" fetchUrl={requests.fetchTrending}  setLoading={setLoading} />
        <Row title="높은평점 영화" id="TR" fetchUrl={requests.fetchTopRated} setLoading={setLoading}/>
        <Row title="액션 영화" id="AM" fetchUrl={requests.fetchActionMovies} setLoading={setLoading} />
        <Row title="코미디 영화" id="CM" fetchUrl={requests.fetchComedyMovies} setLoading={setLoading}/>
        <Row title="공포 영화" id="HM" fetchUrl={requests.fetchHorrorMovies}  setLoading={setLoading}/>
        <Row title="로맨스 영화" id="RM" fetchUrl={requests.fetchRomanceMovies} setLoading={setLoading} />
        <Row title="다큐멘터리" id="DM" fetchUrl={requests.fetchDocumentaries}  setLoading={setLoading}/>
       
      {loading ? <Loading /> : ""}
    </div>
  )
}

export default MainPage