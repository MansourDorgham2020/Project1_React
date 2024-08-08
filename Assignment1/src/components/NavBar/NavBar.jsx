import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className=' bg-slate-700 fixed top-0 ring-0 left-0 w-full list-none text-white p-3 z-50  flex justify-between'>
      <ul>
        <li className='text-3xl font-bold'><Link to={''}>START FRAMEWORK</Link></li>
      </ul>
      <ul className='flex gap-7 my-auto'>
        <li className='font-bold '><NavLink to={'about'}>About</NavLink></li>
        <li className='font-bold'><NavLink to={'contact'}>Contact</NavLink></li>
        <li className='font-bold'><NavLink to={'portofolio'}>Portofolio</NavLink></li>
      </ul>
    </div>
  );
}
