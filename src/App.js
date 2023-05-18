import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Product from './components/Products';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import {Route, Routes} from 'react-router-dom';
import { Category } from './components/Category';
import User from './components/User';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Product />} />
      <Route path='/products/:id' element={<ProductDetail />} />
      <Route path='/Category' element={<Category />} />
      <Route path='/user' element={<User />} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;
