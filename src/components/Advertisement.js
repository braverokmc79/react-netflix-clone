import React from 'react'
import styled from 'styled-components';
const Iframe = styled.iframe`
   

    &::after{
       content:"" ;
       position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;       
    }
`;

function Advertisement({w, h}) {
  return (
    
               
               <Iframe src="https://ads-partners.coupang.com/widgets.html?id=638929&template=carousel&trackingCode=AF2176654&subId=&width=200&height=150" 
                className='advertisement'    
               style={{width:w , height:h}}
               frameborder="0" scrolling="no" referrerpolicy="unsafe-url"></Iframe>
    
  )
}

export default Advertisement