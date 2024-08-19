
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Productdetail from './pages/productdetails';
import { useState } from 'react';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Cart from './pages/cart';
// import Loginpage from './pages/loginpage';

function App() {
  const [cartItems,setCartItems]=useState([])
  return (
    <div className="App">
      {/* <Loginpage /> */}
      <Router>
        <ToastContainer theme="dark" position="top-center"/>
        <div>
          <Header cartItems={cartItems}/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/search' element={<Home />}/>
            <Route path='/product/:id' element={<Productdetail cartItems={cartItems} setCartItems={setCartItems}/>}/>
            <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
          </Routes>
          <Footer />
        </div>

      </Router>

    </div>
  );
}

export default App;
