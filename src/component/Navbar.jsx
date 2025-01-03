import React from 'react'

const Navbar = () => {
  return (
    <nav className='sticky top-0'>
      <header className="text-gray-600 body-font  ">
  <div className="  container mx-auto flex flex-wrap p-5  flex-col md:flex-row items-center bg-pink-400">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
      <a href='#' className="mr-5 hover:text-gray-900">Home</a>
      <a href='#' className="mr-5 hover:text-gray-900">About</a>
      <a href='#' className="mr-5 hover:text-gray-900">Contact</a>
      <a href='#' className="hover:text-gray-900">Purchase</a>
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg> */}
      <img className='cursor-pointer' src="public/key.png" alt="" />
      <span className="ml-3 text-red-900 text-xl font-extrabold baloo font-mono cursor-pointer">Pass-Safe</span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
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
