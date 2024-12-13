"use client";

import React from "react";
import {Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import img1 from "../assets/GFlogo.jpg";
import '../styles/nav.css'
import { HashLink as Links } from "react-router-hash-link";


const NavBar = () => {
  return (
    <Navbar fluid className="navbar">
      <Navbar.Brand>
        <img src={img1} className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span style={{color:'black'}} className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          GymFluencer
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <button className="btnn">
          <span><Link to={'/login'}>login</Link></span>
        </button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link > <Links to='#feat'>Features</Links></Navbar.Link>
        <Navbar.Link ><Links to='#diet'>Diet Plan</Links></Navbar.Link>
        <Navbar.Link ><Links to='#workout'>Workout Plan</Links></Navbar.Link>
        <Navbar.Link ><Links to='#price'>Pricing</Links></Navbar.Link>
        <Navbar.Link ><Links to='#blog'>Blogs</Links></Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
