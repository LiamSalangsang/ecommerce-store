import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={copyrightStyle}>&copy; 2023 Your Ecommerce Website</p>

      {/* Optional: Add links or navigation in the footer */}
      <nav style={navStyle}>
        <a className = 'font-bold m-5 hover:text-purple-400 duration-200' href="#">Home</a>
        <a className = 'font-bold m-5 hover:text-purple-400 duration-200'  href="#">Products</a>
        <a className = 'font-bold m-5 hover:text-purple-400 duration-200' href="#">About Us</a>
        <a className = 'font-bold m-5 hover:text-purple-400 duration-200' href="#">Contact</a>
      </nav>
    </footer>
  );
};

// Styles
const footerStyle = {
  backgroundColor: '#333', // Grey background color
  color: '#fff', // Text color
  padding: '20px',
  textAlign: 'center',
  
 
};

const copyrightStyle = {
  margin: '0',
};

const navStyle = {
  marginTop: '10px',
};



export default Footer;