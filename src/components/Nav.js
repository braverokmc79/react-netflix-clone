import React, { useEffect, useState } from 'react';
import './Nav.css';

const Nav = () => {
    const [show, setShow] = useState(false);

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



    return (
        <nav className={`nav ${show && "nav_black"}`}>
            <img
                alt="Netflix logo"
                //src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
                src="img/Now_Logo.png"
                className='nav_logo'
                onClick={() => window.location.reload()}
            />

            <img
                alt='User logged'
                src="img/logo.png"
                className='nav_avatar'
                onClick={() => window.location.reload()}
            />

        </nav>
    );
};

export default Nav;