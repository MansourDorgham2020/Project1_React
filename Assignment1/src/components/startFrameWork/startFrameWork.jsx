import React from 'react';
import style from './startFrameWork.module.css'
import avatar from '../../assets/avataaars.svg'
export default function StartFrameWork() {
  return <> <div className={`${style.h}  w-full `}>
    <div className='flex justify-center flex-col py-10 '>

    <img src={avatar} className='w-1/6 mx-auto' alt="" />
    <div>    <h1 className='font-bold text-white text-4xl'>START FRAMEWORK</h1></div>
    <div className='flex mx-auto py-4 gap-3'>
        <div className={` w-24 bg-white h-1 my-auto`}></div>
    <i  class="fa-solid fa-star text-white"></i>
    <div className={` w-24 bg-white h-1 my-auto`}></div>

    </div>
    <span className='text-white'>Graphic Artist - Web Designer - Illustrator</span>
</div>
  
  </div>
  </>
  
}
