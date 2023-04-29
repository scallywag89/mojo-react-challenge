import React from 'react';
import Typography from '../Typography/Typography';
import './NavBar.css'

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#"><Typography variant="futuraTitleXSmall">Home</Typography></a></li>
        <li id='active'><a href="#"><Typography variant="futuraTitleXSmall">Course & App</Typography></a></li>
        <li><a href="#"><Typography variant="futuraTitleXSmall">For Work</Typography></a></li>
        <li><a href="#"><Typography variant="futuraTitleXSmall">Merch</Typography></a></li>
        <li><a href="#"><Typography variant="futuraTitleXSmall">Contact Us</Typography></a></li>
        <li><a href="#"><Typography variant="futuraTitleXSmall">My Account</Typography></a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
