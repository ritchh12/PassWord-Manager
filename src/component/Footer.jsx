import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-500 text-white flex flex-col justify-center items-center w-full  '>
            <div className="logo font-bold text-white text-2xl">
       <span className="ml-3 text-slate-300 md:text-xl font-extrabold baloo font- cursor-pointer">&lt;</span>
       <span className=" text-gray-700 md:text-xl font-extrabold baloo font- cursor-pointer">Pass</span>
       <span className=' text-slate-300 md:text-xl font-extrabold baloo font- cursor-pointer'>-Safe</span>
       <span className=' text-gray-700 md:text-xl font-extrabold baloo font- cursor-pointer'>/&gt;</span>


            </div>
            <div className='flex justify-center items-center text-gray-200'> Created with <img className='w-7 mx-1 p-1' src="black-key.png" alt="" /><a href="https://github.com/ritchh12" className='text-gray-200' target='_blank'>by <b className='text-gray-700'> Ritesh</b> </a> </div>
        </div>
    )
}

export default Footer