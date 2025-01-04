import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-300 text-white flex flex-col justify-center items-center w-full  '>
            <div className="logo font-bold text-white text-2xl">
                <span className='text-slate-300'> &lt;</span>

                <span className='text-gray-400'>&lt;Pass-</span><span className='text-gray-700'>Safe/&gt;</span>


            </div>
            <div className='flex justify-center items-center text-gray-500'> Created with <img className='w-7 mx-2' src="power.png" alt="" /><a href="https://github.com/ritchh12" className='text-gray-500' target='_blank'>by <b className='text-gray-700'> Ritesh</b> </a> </div>
        </div>
    )
}

export default Footer