import React from 'react';
import Footer from '../footer/footer'
import Navbar from '../header/Navbar';

function Layout({children}) {
  return (
     <>
      <Navbar/>
      {children}
      <Footer/>
     </>
  )
}

export default Layout
