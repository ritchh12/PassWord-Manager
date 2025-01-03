import React from 'react'

const Footer = () => {
    return (
        <div className='bg-pink-300 text-white flex flex-col justify-center items-center w-full  '>
            <div className="logo font-bold text-white text-2xl">
                <span className='text-pink-500'> &lt;</span>

                <span>Pass-</span><span className='text-pink-500'>Safe/&gt;</span>


            </div>
            <div className='flex justify-center items-center'> Created with <img className='w-7 mx-2' src="power.png" alt="" /><a href="https://github.com/ritchh12" target='_blank'>by <b>Ritesh</b> </a> </div>
        </div>
    )
}

export default Footer