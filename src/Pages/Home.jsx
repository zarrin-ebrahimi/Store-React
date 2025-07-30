import React from 'react'
import Header from '../LayOut/Header'
import MenuItems from '../LayOut/MenuItems'
import Landing from '../Components/Landing'
import SuggestionSlider from '../Components/BestSuggestion.jsx/SuggestionSlider'
import Banner from '../Components/Banner'
export default function Home() {
  return (
    <div className='container mx-auto'>
        <Header/>
        <MenuItems/>
        <Landing/>
        <SuggestionSlider/>
        <Banner/>
    </div>
  )
}
