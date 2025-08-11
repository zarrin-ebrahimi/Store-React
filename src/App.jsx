import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Wishlist from "./Pages/Wishlist";
import BlogDetail from "./Pages/BlogDetail";
import ProductDetail from "./Pages/ProductDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/blogPosts/:id" element={<BlogDetail />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
