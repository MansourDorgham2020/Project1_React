import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function LayOut() {
  return (
    <>
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      <div className='flex-grow  py-14 '>
        <Outlet />
      </div>
      <Footer />  
    </div>
      
    </>
  );
}
