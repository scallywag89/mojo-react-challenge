import React from 'react';
import Typography from '../Typography/Typography';
import './NavBar.css'

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#"><Typography>Home</Typography></a></li>
        <li id='active'><a href="#"><Typography>Course & App</Typography></a></li>
        <li><a href="#"><Typography>For Work</Typography></a></li>
        <li><a href="#"><Typography>Merch</Typography></a></li>
        <li><a href="#"><Typography>Contact Us</Typography></a></li>
        <li><a href="#"><Typography>My Account</Typography></a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
