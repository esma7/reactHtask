import React from "react";
import "../css/header.css";
import userlogo from "../img/user.svg"
import shoplogo from "../img/cart.svg"
import { FaBars } from "react-icons/fa6";



const Header = () => {

// const showmenu= document.getElementById("menu").addEventListener("click", ()=>{
//   let menu = document.querySelector(".navigation")
//   menu.classList.toggle("showmenu")
//   })
  return (
    <header id="header">        
      <div className="container">        
        <div className="logo">
          <h2>Furni <span>.</span></h2>
        </div>
        <nav className="showmenu">
            <ul className="navigation">
                <li><a className="active" href="home.html">Home</a></li>
                <li><a href="shop.html">Shop</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contact.html">Contact us</a></li>
            </ul>
            <div className="socials">
                <a href=""><img src={userlogo} alt="logo"/></a>
                <a href=""><img src={shoplogo} alt="logo"/></a>               
        </div>
        </nav>
        <button id="menu"><FaBars /></button>
      
       
      </div>     
    </header>
  );
};

export default Header;
