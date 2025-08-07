import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home' 
import LikedProduct from './Pages/LikedProduct' 
import './App.css'

function App() {


  return (
<BrowserRouter>
 <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/liked-product' element={<LikedProduct/>}/>
 </Routes>
</BrowserRouter>
  )
}

export default App
