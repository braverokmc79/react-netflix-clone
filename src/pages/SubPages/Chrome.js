import React from 'react'
import Advertisement from '../../components/Advertisement';
import "./SubPages.css";

function Chrome() {

  return (
    <div className='submenu'>

            <Advertisement  w={1200} h={250} />
            <br/><br/>
        <div>
              <h2>크롬 브라우저에 VPN 사용</h2>
            <p>OS와 무관하게 크롬 브라우저가 설치되어 있다면, 누구나 쉽게 VPN을 사용하여 우회하는 방법입니다.</p>
            
            <p>무료로 이용할 수 있는 앱도 있고, 무료의 경우 어느정도 사용 제한이 있지만 개인정보 보호 관점에서 불법적인
            사용을 하지 않는다면 크게 문제가 발생될 소지는 없습니다.</p>

            <p>개인정보 보호 및 익명성이 중요하다면 유료 서비스를 이용하는것이 좋습니다.</p>
          
            <p>
            <img className='img2'
            src="https://waaboom.com/wp-content/uploads/image_resize/2021/10/addcf01ec1e28a5e61f132818dafe277.webp?ezimgfmt=ng%3Awebp%2Fngcb3%2Frs%3Adevice%2Frscb3-1" 
                /></p>
            <p><a href="https://chrome.google.com/webstore/search/vpn?hl=ko" target="_blank" rel="noreferrer noopener" 
                className='font-blue'>크롬 웹 스토어</a>
            </p>
        
        
       <ul className='subpages-detaile'>
			<li>크롬 웹 스토어에서 VPN으로 검색을 해 보면 많은 무료 VPN 앱을 확인할 수 있습니다. 본인이 좋은
				VPN 앱을 알고 있다면 해당 크롬 확장 프로그램을 설치해 사용하면 됩니다. <br />
			</li>
			<li>저 많은 VPN 앱 중에 속도가 가장 빠르다고 생각된 UltraSurf 사용법에 대해 알아보겠습니다.<br /></li>
			<li>Chrome에 추가를 클릭해 Ultra Surf 앱을 설치한 후 활성화 하면 됩니다.<br />
			<br /> 
            <img className='img2'
				src="https://waaboom.com/wp-content/uploads/image_resize/2021/10/3fef2d060a9cf8882ff4f21c839b7ffb.webp?ezimgfmt=rs:704x499/rscb3/ng:webp/ngcb3"
				 /> <br />
			</li>
           
			<li><p>그 동안 접속하기 어려웠던 사이트에 접속을 해 우회가 잘 되는지 확인해 보면 됩니다.</p></li>
		</ul>


        <br />
        <p>다른 앱을 설치해도 설정하는부분은 대부분 비슷하기에 원하는 앱을 설치해서 이용하면 됩니다.</p>
        <p>출처 : <a href='https://waaboom.com/크롬-브라우저에서-vpn-우회방법'>와붐 WaaBoom.com</a></p>

        </div> 
    </div>
	
  )

}

export default Chrome