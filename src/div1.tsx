import React from 'react'

function Div1() {
  return (
    <div className='h-full w-full bg-white  mt-14  flex justify-between space-x-10'>
        <div className='text-black  ml-20  space-y-8 '>
            <h1 className='text-5xl font-bold mt-10 '>Heading</h1>
            <h4 className='text-xl font-thin'>Let's talk a little about what symptoms a  slow  <br /> computer can have</h4>
            <div className='space-y-4'>
            <input type="text" placeholder='Name' className='bg-white p-4  w-full h-14  shadow-md border-2'/>
            <input type="text" placeholder='Email' className='bg-white p-4  w-full h-14  shadow-md border-2'/>
            <button className='bg-sky-400 hover:text-black text-white hover:bg-white'>Subscribe</button>

        </div>
        </div>
       
        <div className=''>
            <img src="../img/vector.png" alt="" />
        </div>
    </div>
  )
}

export default Div1