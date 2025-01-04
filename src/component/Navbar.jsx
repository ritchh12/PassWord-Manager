import React from 'react'

const Navbar = () => {
  return (
    <nav  className='md:sticky md:top-0'>
      <header className="text-gray-600 body-font  ">
  <div className="  container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-slate-400">
    <nav className="flex lg:w-2/5  items-center text-base md:ml-auto ">
      {/* <a href='#' className="mr-5 hover:text-gray-900">Home</a>
      <a href='#' className="mr-5 hover:text-gray-900">About</a>
      <a href='#' className="mr-5 hover:text-gray-900">Contact</a>
      <a href='#' className="hover:text-gray-900">Purchase</a> */}
    </nav>
    
    <a className="flex  order-first lg:order-none  lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center md:mb-0">
      <img className='cursor-pointer' src="/black-key.png" alt="" />
       <span className="ml-3 text-slate-300 md:text-xl font-extrabold baloo font- cursor-pointer">&lt;</span>
       <span className=" text-gray-700 md:text-xl font-extrabold baloo font- cursor-pointer">Pass</span>
       <span className=' text-slate-300 md:text-xl font-extrabold baloo font- cursor-pointer'>-Safe</span>
       <span className=' text-gray-700 md:text-xl font-extrabold baloo font- cursor-pointer'>/&gt;</span>
    </a> 
    <div className="lg:w-2/5 inline-flex just lg:justify-end ml-5 lg:ml-0">
    <a className='' target='_blank' href="https://github.com/ritchh12">  
    <button  className="inline-flex items-center gap-3 bg-pink-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">GitHub
        <img src="/github-logo.png" alt="" />
        {/* <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg> */}
      </button></a>
    </div>
  </div>
</header>
    </nav>
  )
}

export default Navbar
