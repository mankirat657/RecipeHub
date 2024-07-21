import React from 'react'

function Contact() {
  return (
    <div className='w-full min-h-screen my-12' >
        <h1 className='bg-yellow-400 text-black font-semibold text-center text-4xl'>Contact Us</h1>
        <div className="contactPage text-yellow-400 w-4/5 h-4/5 border border-yellow-400 m-auto mt-6 rounded-3xl flex flex-col items-center py-3 gap-5">
        <div className="pack flex gap-4">
            <p className='font-semibold text-2xl '>Name:</p>
            <input type="text" className='rounded-full bg-yellow-400 outline-none text-black font-semibold px-2' />
        </div>
        <div className="pack flex gap-4">
            <p className='font-semibold text-2xl '>Email:</p>
            <input type="text" className='rounded-full bg-yellow-400 outline-none text-black font-semibold px-2' />
        </div>
        <div className="pack flex gap-4">
            <p className='font-semibold text-2xl '>Desc:</p>
            <textarea name="" id="" rows={10} cols={30} className='rounded-lg bg-yellow-400 outline-none text-black px-2 font-semibold'></textarea>
        </div>
        <div className="pack flex gap-4 items-center">
            <p className='font-semibold text-2xl '>Submit:</p>
            <button className='bg-yellow-400 text-black mt-2 p-2 border-none font-semibold rounded-md'>Submit</button>
        </div>
        </div>
    </div>
  )
}

export default Contact
