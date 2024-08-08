import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
  return (
    <>
    <div className='relative py-1  '>
    <div className='flex flex-col  bg-slate-800 text-white  absolute bottom-0 left-0 right-0 '>
        <div className='flex justify-between w-full'>
        <div className='w-1/3 mx-auto ' >
        <h1 className='py-2 font-extrabold text-3xl'>LOCATION</h1>
        <p className='py-2 font-bold'>2215 John Daniel Drive</p>
        <p className='py-2 font-light'>Clark, MO 65243</p>
        </div>
        <div className='mx-auto'>
            <h1 className=' font-bold py-2 font-extrabold text-3xl'>AROUND THE WEB</h1>
            <div className='row '>
                <div className={`${style.border}`}>
            <i  className="fab fa-facebook px-2 py-2"></i>
            </div>
            <div className={`${style.border}`} >
            <i className="fab fa-twitter px-2 py-2"></i>
            </div>
            <div className={`${style.border}`}>
            <i class="fa-brands fa-linkedin-in px-2 py-2"></i> 
            </div>
            <div className={`${style.border}`}>
            <i class="fa-solid fa-globe px-2 py-2"></i>
            </div>
            </div>
           
        </div>
        <div className='mx-auto'>
                <h1 className='py-2 font-extrabold text-3xl'>ABOUT FREELANCER</h1>
                <p className='w-3/4 mx-auto font-bold'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
            </div>
            <div className=' bg-slate-950 bottom-0 right-0 left-0 p-5'>
                <span className='text-center'>
                Copyright © Your Website 2021
                </span>
            </div>
    </div>
    </div>
    </>
  )
}
