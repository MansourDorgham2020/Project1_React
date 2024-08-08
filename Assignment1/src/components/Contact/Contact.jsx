import React from 'react'
import style from './Contact.module.css'
export default function Contact() {
  return (
    <div className={`${style.h} flex flex-col`}>
        <section className='mx-auto'>
            <h1 className='text-5xl font-bold text-slate-500'>Contact Section</h1>
      <div className='flex ml-16 py-4 gap-3 '>
        <div className={` w-24 bg-slate-500 h-1 my-auto`}></div>
    <i  class="fa-solid fa-star text-slate-500"></i>
    <div className={` w-24 bg-slate-500 h-1 my-auto`}></div>
        </div>
        </section>
      <section className=''>
     
<div class="flex items-center justify-center p-12 ">
  <div class="mx-auto w-full max-w-[550px]">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div class="mb-5 py-5">
        
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          class=" w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5 py-5">
        
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@domain.com"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5 py-5">
        
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter your subject"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5 py-5">
      <input
          type="password"
          name="subject"
          id="subject"
          placeholder="Enter your Password"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
       
      </div>
      <div className='py-5'>
        <button
          class=" hover:shadow-form rounded-md bg-green-800 py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
      </section>
      
    </div>
  )
}
