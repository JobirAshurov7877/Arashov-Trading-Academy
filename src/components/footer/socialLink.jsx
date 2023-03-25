import React from 'react'
import './footer.css'

const SocialLink = ({link,img}) => {
  return (
    <>
      <a href={link}><img src={img} alt="social" /></a>
    </>
  )
}

export default SocialLink
