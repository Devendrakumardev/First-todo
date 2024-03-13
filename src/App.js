import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Commponets/Navbar/Navbar';
import ShopCategary from './Pages/ShopCategary';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategary categary="men"/>}/>
        <Route path='/mens' element={<ShopCategary categary="women"/>}/>
        <Route path='/mens' element={<ShopCategary categary="kid"/>}/>
        <Route path='/product'element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>

      </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
