import Image from 'next/image'
import React from 'react'

const Hero = ({src, alt}) => {
  return (
    <div>
      <img src={src} alt={alt} width={500} />
    </div>
  )
}

export default Hero