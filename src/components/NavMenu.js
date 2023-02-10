import React, { useEffect, useState } from 'react';
import './Nav.css';

import { Link } from "react-scroll"
import { useLocation } from 'react-router-dom';



const NavMenu = () => {
    const [show, setShow] = useState(false);
    const location=useLocation();

    useEffect(() => {
        console.log(" location : " , location.pathname);
       

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", () => { });
        }
    }, [location]);


   
    return (<>
        location.pathname!=="/" ?  "" : <nav className={`nav ${show && "nav_black"}  nav-menu`}>
          <div className="header">
             <ul>
                <li className="on"><Link to="NO" spy={true} smooth={true} offset={-250}>넷플릭스 오리지널 </Link></li>   
                <li><Link to="TN" spy={true} smooth={true} offset={-250}>최신인기 영화 </Link> </li>
                <li> <Link to="TR" spy={true} smooth={true} offset={-250}>높은평점 영화</Link></li>
                <li> <Link to="AM" spy={true} smooth={true} offset={-250}>액션 영화</Link></li>
                <li> <Link to="CM" spy={true} smooth={true} offset={-250}>코미디 영화</Link></li>
                <li> <Link to="HM" spy={true} smooth={true} offset={-250}>공포 영화</Link></li>
                <li> <Link to="RM" spy={true} smooth={true} offset={-250}>로맨스 영화</Link></li>
                <li> <Link to="DM" spy={true} smooth={true} offset={-250}>다큐멘터리</Link></li>
            </ul>
            </div> 
        </nav>

        {/* 모바일 메뉴 
        다음 사이트를 통해 개발
        https://codepen.io/erikterwan/pen/EVzeRP
        */}
        {/* <nav role="navigation">
            <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
                 <li className="on"><Link to="NO" spy={true} smooth={true} offset={-250}>넷플릭스 오리지널 </Link></li>   
                <li><Link to="TN" spy={true} smooth={true} offset={-250}>최신인기 영화 </Link> </li>
                <li> <Link to="TR" spy={true} smooth={true} offset={-250}>높은평점 영화</Link></li>
                <li> <Link to="AM" spy={true} smooth={true} offset={-250}>액션 영화</Link></li>
                <li> <Link to="CM" spy={true} smooth={true} offset={-250}>코미디 영화</Link></li>
                <li> <Link to="HM" spy={true} smooth={true} offset={-250}>공포 영화</Link></li>
                <li> <Link to="RM" spy={true} smooth={true} offset={-250}>로맨스 영화</Link></li>
                <li> <Link to="DM" spy={true} smooth={true} offset={-250}>다큐멘터리</Link></li>
            </ul>
            </div>
        </nav> */}
</>

    );
};

export default NavMenu;