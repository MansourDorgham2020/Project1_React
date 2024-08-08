import React from 'react'
import style from './About.module.css'
export default function About() {
  return (
    <div className={` min-h-screen ${style.About}`}  >
      <div className=' flex justify-center flex-col py-36 text-white'>
        <h1 className='text-3xl font-bold '>About Component</h1>
        <div className='flex mx-auto py-4 gap-3'>
        <div className={` w-24 bg-white h-1 my-auto`}></div>
    <i  class="fa-solid fa-star text-white"></i>
    <div className={` w-24 bg-white h-1 my-auto`}></div>
        </div>
        <div className='flex w-3/4 mx-auto gap-4 text-left'>
            <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as  optional SASS stylesheets for easy customization.</p>
<p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>

      </div>
    </div>
  )
}
