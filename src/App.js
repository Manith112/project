import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Product from './components/Products';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Product />} />
      <Route path='/products/:id' element={<ProductDetail />} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;
