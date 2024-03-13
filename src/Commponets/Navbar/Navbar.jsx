import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import card_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu,setmenu]=useState("shop");
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='' />
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu' >
                <li  onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("mens")}}> <Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>} </li>
                <li onClick={()=>{setmenu("womens")}}>  <Link style={{textDecoration:'none'}} to='/womens'>Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>kids</Link>{menu==="kids"?<hr/>:<></>} </li>
                </ul>
                <div className='nav-login-cart'>
                  <Link to='/logon'> <button>Login</button> </Link> 
                  <Link to='/cart'> <img src={card_icon} alt="" /> </Link> 
                   <div className='nav-cart-count'>0</div>

                </div>
        </div>
    )
}

export default Navbar
