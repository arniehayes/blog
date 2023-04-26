import React from 'react'
import style from "../styles/componentStyles/Hero.module.scss"

const Hero = ({src, alt}) => {
  return (
    <div className={style.heroContainer}>
      <img src={src} alt={alt} width={900} />
    </div>
  )
}

export default Hero