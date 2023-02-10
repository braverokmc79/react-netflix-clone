import React from 'react'
import styled from 'styled-components';
 const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #000;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

 const LoadingText = styled.div`
  font: 1.5rem 'Noto Sans KR';
  text-align: center;
  color:#fff;
`;


export default function Loading() {
  return (
    <Background>
       <img src={`${process.env.PUBLIC_URL}/img/Spinner.svg`} alt="로딩중" width="10%" />
    <LoadingText>잠시만 기다려 주세요.</LoadingText>
   
  </Background>
  )
}
