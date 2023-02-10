import React from 'react'
import styled from 'styled-components';
const Iframe = styled.iframe`
    width:200px;
    height: 150px;

    &::after{
       content:"" ;
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;       
    }
`;

function Advertisement() {
  return (
    
               
               <Iframe src="https://ads-partners.coupang.com/widgets.html?id=638929&template=carousel&trackingCode=AF2176654&subId=&width=200&height=150" 
                         frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></Iframe>
    
  )
}

export default Advertisement