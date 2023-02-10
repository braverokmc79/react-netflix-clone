import React, { useEffect, useState } from 'react'
import webLinkSite from '../hooks/webLinkSite'



export default function  GoMove({title , name, webSiteName, domain}) {
  const [link, setLink] =useState();
  useEffect(  ()=>{
    getLink();
  }, []);

  const getLink = async ()=>{
    const result= await webLinkSite(domain);
    setLink(result);
  }

   
  return (
        <a href={`${link}${title ? encodeURIComponent(title) : encodeURIComponent(name)}`}
         rel="noopener noreferrer" className={`btn ${domain}`} >
        <i className="fa fa-eye"></i> {webSiteName}
        </a>
    
  )
}
