import React from 'react'

export default function Banner() {
  return (
    <div  className='grid grid-cols-1  md:grid-cols-2 p-5 gap-6'>
      <img src="./public/banner-1.png" alt="banner"  className='transition-transform duration-300 hover:scale-103' />
      <img src="./public/banner-2.png" alt="banner"  className='transition-transform duration-300 hover:scale-103' />
    </div>
  )
}
