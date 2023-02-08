import React from 'react'
import webLinkSite from '../hooks/webLinkSite'



export default function GoMove({title , name, webSiteName, domain}) {
   
  return (
        <a href={`${webLinkSite(domain)}${title ? encodeURIComponent(title) : encodeURIComponent(name)}`}
         target="_blank" rel="noopener noreferrer" className={`btn ${domain}`} >
        <i class="fa fa-eye"></i> {webSiteName}
        </a>
    
  )
}
