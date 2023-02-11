import React from 'react'
import Advertisement from '../../components/Advertisement';
import "./SubPages.css";

function Https() {
  return (
    <div className='submenu'>
        <Advertisement  w={1200} h={250} />


        <div>
            <h2>HTTPS SNI 차단 우회방법</h2>

            <br/>
            <p>
                <img className='img2' width={1200}
                 src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpxX_N17nj-1tthR_zAfYqgEKp7-yyCsIesO3k9aDREpfsw5lYNmSZYJNxsHHDKn7-KRdO5VMcZDkS5O_Dv7Vbwb5a9ZmctMnnDpApWEWpr44nZqisalckuOF5W2G6Twh3uMfuQ6L4rwWxiZxpzjsNPjLNuEOj_QQYgZR1cM4JHQtOgrmhD2X3C53xWA/s5389/2023-02-11%2009%2022%2026.png"  />

                 
            </p>
            <p>출처 : <a href='https://gentlysallim.com/https-차단-우회-방법-dns-차단은-뭐고-sni-차단은-뭐임/'>gentlysallim.com</a></p>


            <br/><br/><br/>
            <h2>HTTPS SNI 차단 우회하는 방법</h2>


            <div id="toc_container" className="toc_light_blue no_bullets">
	<ul className="toc_list">
		<li><a
			href="https://macinjune.com/all-posts/web-tip/https-sni-차단-우회하는-방법-모바일-pc-총정리/#ESNI_SNI__DNS_over_HTTPS#ESNI_SNI__DNS_over_HTTPS#Puffin">
				<span className="toc_number toc_depth_1">1</span> Puffin 브라우저 사용 |
				아이폰 / 안드로이드
		</a></li>
		<li><a
			href="https://macinjune.com/all-posts/web-tip/https-sni-차단-우회하는-방법-모바일-pc-총정리#Sniper"><span
				className="toc_number toc_depth_1">2</span> Sniper 앱 사용 | 아이폰 /
				안드로이드</a></li>
		<li><a
			href="https://macinjune.com/all-posts/web-tip/https-sni-차단-우회하는-방법-모바일-pc-총정리#Intra"><span
				className="toc_number toc_depth_1">3</span> Intra 앱 사용 | 안드로이드</a></li>
		<li><a
			href="https://macinjune.com/all-posts/web-tip/https-sni-차단-우회하는-방법-모바일-pc-총정리#VPN"><span
				className="toc_number toc_depth_1">4</span> VPN 우회</a>
			<ul>
				<li><a
					href="https://macinjune.com/all-posts/web-tip/https-sni-차단-우회하는-방법-모바일-pc-총정리#_VPN"><span
						className="toc_number toc_depth_2">4.1</span> 아이폰 VPN 우회</a></li>
				<li><a
					href="https://macinjune.com/all-posts/web-tip/https-sni-차단-우회하는-방법-모바일-pc-총정리#_VPN-2"><span
						className="toc_number toc_depth_2">4.2</span> 안드로이드 VPN 우회</a></li>
				<li><a
					href="https://macinjune.com/all-posts/web-tip/https-sni-차단-우회하는-방법-모바일-pc-총정리#_VPN-3"><span
						className="toc_number toc_depth_2">4.3</span> 크롬 브라우저 VPN 우회</a></li>
				<li><a
					href="https://macinjune.com/all-posts/web-tip/https-sni-차단-우회하는-방법-모바일-pc-총정리#_VPN-4"><span
						className="toc_number toc_depth_2">4.4</span> 오페라 브라우저 VPN 우회</a></li>
				<li><a
					href="https://macinjune.com/all-posts/web-tip/https-sni-차단-우회하는-방법-모바일-pc-총정리#_VPN-5"><span
						className="toc_number toc_depth_2">4.5</span> 맥 VPN 우회</a></li>
				<li><a
					href="https://macinjune.com/all-posts/web-tip/https-sni-차단-우회하는-방법-모바일-pc-총정리#_VPN-6"><span
						className="toc_number toc_depth_2">4.6</span> 윈도우 VPN 우회</a></li>
			</ul></li>
		<li><a
			href="https://macinjune.com/all-posts/web-tip/https-sni-차단-우회하는-방법-모바일-pc-총정리#i"><span
				className="toc_number toc_depth_1">5</span> 구글 번역기 우회 | 운영체제 무관</a></li>
		<li><a
			href="https://macinjune.com/all-posts/web-tip/https-sni-차단-우회하는-방법-모바일-pc-총정리#Goodbye_DPI"><span
				className="toc_number toc_depth_1">6</span> Goodbye DPI 사용 | 윈도우</a></li>
		<li><a
			href="https://macinjune.com/all-posts/web-tip/https-sni-차단-우회하는-방법-모바일-pc-총정리#ESNI_SNI__DNS_over_HTTPS"><span
				className="toc_number toc_depth_1">7</span> ESNI (SNI 암호화) &amp; DNS
				over HTTPS</a></li>
		<li><a
			href="https://macinjune.com/all-posts/web-tip/https-sni-차단-우회하는-방법-모바일-pc-총정리#i-2"><span
				className="toc_number toc_depth_1">8</span> 윈도우 &amp; 안드로이드 패킷 파편화</a></li>
		<li><a
			href="https://macinjune.com/all-posts/web-tip/https-sni-차단-우회하는-방법-모바일-pc-총정리#MTU"><span
				className="toc_number toc_depth_1">9</span> MTU 수정 (참고용)</a>
			<ul>
				<li><a
					href="https://macinjune.com/all-posts/web-tip/https-sni-차단-우회하는-방법-모바일-pc-총정리#_MTU"><span
						className="toc_number toc_depth_2">9.1</span> 윈도우 MTU 값 변경</a></li>
				<li><a
					href="https://macinjune.com/all-posts/web-tip/https-sni-차단-우회하는-방법-모바일-pc-총정리#_MTU-2"><span
						className="toc_number toc_depth_2">9.2</span> 맥 MTU 값 변경</a></li>
			</ul></li>
	</ul>
</div>





        </div>
    </div>
  )
}

export default Https