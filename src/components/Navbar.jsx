import React from 'react'
import burg from '../assets/burg.png'
import imgmen from '../assets/menu.png'
function Navbar() {
  
  return (
    <div className='flex w-screen justify-between items-center p-2 pr-6 sticky top-0 bg-black '>
        <div className="logo flex items-center text-white">
            <img src={burg} width="50" alt="" />
            <h1 className='font-semibold '>Recipe <span className='text-yellow-200'>Hub</span></h1>
        </div>
        <div className="flex items-center gap-3">
            <img src={imgmen} width="50" alt="" />
            <div className="w-24 h-9 bg-yellow-400 rounded-full flex justify-center items-center font-semibold">
                <p className='font-semibold'>Recipes</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar
