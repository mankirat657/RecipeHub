import React from 'react'
import food from '../assets/food.jpg'
function Hero() {
  return (
    <div className='flex flex-col items-center w-screen py-5 pr-5 pl-5 gap-5 '>
        <div className="heading text-white">
            <h1 className='herofont font-semibold text-5xl uppercase'>Welcome To The <span className='text-yellow-300'>Recipe</span> Hub Where <br/>every recipe is a <span className='text-yellow-300'>taste & Smile</span></h1>
        </div>
        <div className="imgdiv bg-white w-full h-96 rounded-3xl">
            <img src={food} alt="" className='w-full h-96 object-cover rounded-3xl' />
        </div>
    </div>
  )
}

export default Hero
