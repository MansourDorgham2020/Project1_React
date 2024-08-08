import React, { useEffect } from 'react'
import style from './Portofolio.module.css'
import image from '../../assets/poert1.png'
import image2 from '../../assets/images/products/port2.png'
import image3 from '../../assets/images/products/port3.png'




export default function Portofolio() {

let Img =document.getElementsByClassName('fa-solid fa-plus')
let light = document.getElementById('light')
useEffect(()=>{
    for (let i = 0; i < Img.length; i++) {
        Img[i].addEventListener('click' , function(){
            light.classList.remove('hidden')
        })    
       }
       document.addEventListener('keyup',function(e){
        if(e.key =='Escape'){
            light.classList.add('hidden')
        }
       })
       document.addEventListener('click',function(e){
        if(e.target==light){
            light.classList.add('hidden')
        }
       })
})


  return (
    <div className={`${style.h} flex flex-wrap justify-center py-20 container mx-auto gap-5 mb-20 `}>
      <div className='w-1/4 relative'>
      <div  className='relative'>
        <img   src={image} className='w-full' alt="" />
        <div className={`absolute bg-emerald-400 top-0 bottom-0 right-0 left-0 w-full opacity-0 ${style.compo} flex justify-center align-middle  `}>
        <i id='f-img' class="fa-solid fa-plus my-auto text-6xl cursor-pointer"></i>
        </div>
        <div  id='light' className={`${style.light} hidden`}>
                    <img src={image} className='w-1/2 ' alt="" />

        </div>
      </div>
        
      </div>
      <div className='w-1/4 relative'>
      <div  className='relative'>
        <img   src={image2} className='w-full' alt="" />
        <div className={`absolute bg-emerald-400 top-0 bottom-0 right-0 left-0 w-full opacity-0 ${style.compo} flex justify-center align-middle  `}>
        <i id='f-img' class="fa-solid fa-plus my-auto text-6xl -pointer"></i>
        </div>
        <div  id='light' className={`${style.light} hidden`}>
                    <img src={image2} className='w-1/2 ' alt="" />

        </div>
      </div>
        
      </div>
      <div className='w-1/4 relative'>
      <div  className='relative'>
        <img   src={image3} className='w-full' alt="" />
        <div className={`absolute bg-emerald-400 top-0 bottom-0 right-0 left-0 w-full opacity-0 ${style.compo} flex justify-center align-middle  `}>
        <i id='f-img' class="fa-solid fa-plus my-auto text-6xl cursor-pointer"></i>
        </div>
        <div  id='light' className={`${style.light} hidden`}>
                    <img src={image3} className='w-1/2 ' alt="" />

        </div>
      </div>
        
      </div>
      <div className='w-1/4 relative'>
      <div  className='relative'>
        <img   src={image} className='w-full' alt="" />
        <div className={`absolute bg-emerald-400 top-0 bottom-0 right-0 left-0 w-full opacity-0 ${style.compo} flex justify-center align-middle  `}>
        <i id='f-img' class="fa-solid fa-plus my-auto text-6xl cursor-pointer"></i>
        </div>
        <div  id='light' className={`${style.light} hidden`}>
                    <img src={image} className='w-1/2 ' alt="" />

        </div>
      </div>
        
      </div>
      <div className='w-1/4 relative'>
      <div  className='relative'>
        <img   src={image2} className='w-full' alt="" />
        <div className={`absolute bg-emerald-400 top-0 bottom-0 right-0 left-0 w-full opacity-0 ${style.compo} flex justify-center align-middle  `}>
        <i id='f-img' class="fa-solid fa-plus my-auto text-6xl cursor-pointer"></i>
        </div>
        <div  id='light' className={`${style.light} hidden`}>
                    <img src={image2} className='w-1/2 ' alt="" />

        </div>
      </div>
        
      </div>
      <div className='w-1/4 relative'>
      <div  className='relative'>
        <img   src={image3} className='w-full' alt="" />
        <div className={`absolute bg-emerald-400 top-0 bottom-0 right-0 left-0 w-full opacity-0 ${style.compo} flex justify-center align-middle  `}>
        <i id='f-img' class="fa-solid fa-plus my-auto text-6xl cursor-pointer"></i>
        </div>
        <div  id='light' className={`${style.light} hidden`}>
                    <img src={image3} className='w-1/2 ' alt="" />

        </div>
      </div>
        
      </div>
    </div>
  )
}
