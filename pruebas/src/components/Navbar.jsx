import React from 'react'
import { useRef } from 'react'
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"
import "../Assets/navbar.css"
import { Darkmode } from './Darkmode'

export const Navbar = () => {

    const navRef = useRef();

    const showNavbar = () =>{
        navRef.current.classList.toggle("move_nav");
    }

  return (
    <div>


<header>
    <div>
        <a> <img src='#'></img></a>
    </div>
        <nav ref={navRef}>
        <a href='/'>Inicio</a>
        <a href='/componete2'>Componente2</a>
        <a href='#'>About us</a>
        <a href='#'>Log in</a>
<Darkmode></Darkmode>
        <button className='nava close' onClick={showNavbar}>
        <FaTimes/>
          
        </button>
        </nav>

        <button className='nava' onClick={showNavbar}>
            <FaBars/>

        </button>
</header>

    </div>
  )
}
