import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';


const Nav = () => {
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] =useState("");
    const navigate =useNavigate();

    useEffect(() => {
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
    }, []);


    const handleChange =(e)=>{
        setSearchValue(e.target.value);
        navigate(`/search?q=${e.target.value}`)
    }

    return (
        <nav className={`nav ${show && "nav_black"}`}>

            <img alt='User logged' src={`${process.env.PUBLIC_URL}/img/logo.png`}
                className='nav_avatar_mobile'   onClick={() => navigate("/")}  />
 
            <img
                alt="Netflix logo"
                //src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
                src={`${process.env.PUBLIC_URL}/img/Now_Logo.png`}
                className='nav_logo'
                onClick={() => navigate("/")}
            />

            <input value={searchValue} 
            onChange={handleChange}  className="nav_input"  type="search" placeholder='영화를 검색해 주세요.' />

            <img
                alt='User logged'
                src={`${process.env.PUBLIC_URL}/img/logo.png`}
                className='nav_avatar'
                onClick={() => window.location.reload()}
            />

        </nav>
    );
};

export default Nav;