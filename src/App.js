import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import ProductDetail from "./components/products/ProductDetail";
import HomePage from "./pages/home/HomePage";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import AboutPage from "./pages/about/AboutPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
