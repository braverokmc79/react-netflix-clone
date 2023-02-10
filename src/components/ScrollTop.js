import React, { useCallback, useEffect, useState } from 'react'
import { elementScrollIntoView } from 'seamless-scroll-polyfill';


const ScrollTop = () => {

    const [showButton, setShowButton] =useState(false);
    const scrollToTop = useCallback(() => {
        elementScrollIntoView(document.getElementById("root"), {
            behavior: 'smooth',
        });
    }, []);


    useEffect(()=>{
        const handleShowButton=()=>{
            if (window.scrollY > 500) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }
        window.addEventListener("scroll", handleShowButton);

        return ()=>{
            window.removeEventListener("scroll", handleShowButton);
        }
    })

 return showButton && (
    <>
        <button type="button"  id="topBtn" onClick={scrollToTop} >TOP</button>
    </>
  )

}

export default ScrollTop