import React from 'react'
import Header from '../LayOut/Header'
import MenuItems from '../LayOut/MenuItems'
import Landing from '../Components/Landing'
import SuggestionSlider from '../Components/BestSuggestion.jsx/SuggestionSlider'
import Banner from '../Components/Banner'
import BestSellers from '../Components/BestSellars/BestSellers'
import MostViewedProduct from '../Components/MostViewedProduct/MostViewedProduct'
import BlogSection from '../Components/Blog/BlogSection'
import Footer from '../LayOut/Footer'
export default function Home() {
  return (
    <div className='container mx-auto md:px-24'>
        <Header/>
        <MenuItems/>
        <Landing/>
        <SuggestionSlider/>
        <Banner/>
        <BestSellers/>
        <MostViewedProduct/>
        <BlogSection/>
        <Footer/>
    </div>
  )
}
