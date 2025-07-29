import React from 'react'
import Header from '../LayOut/Header'
import MenuItems from '../LayOut/MenuItems'
import Landing from '../Components/Landing'
export default function Home() {
  return (
    <div className='container mx-auto'>
        <Header/>
        <MenuItems/>
        <Landing/>
    </div>
  )
}
