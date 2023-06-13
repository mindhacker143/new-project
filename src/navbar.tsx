import React from 'react'
import { CiSearch } from 'react-icons/ci';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  return (
    <div className='h-20 w-screen  shadow-lg'>
       
        <div className='h-full  border-2 flex items-center lg:justify-center lg:space-x-10 sm:justify-between sm:p-8 '>
            <div className='text-black lg:hidden '><FaBars /></div>
            
            <a href="" className='text-black hover:text-blue-400 sm:hidden lg:block sm:flex-col'>First Link</a>
            <a href="" className='text-black hover:text-blue-400 sm:hidden lg:block sm:flex-col'>Second Link</a>
            <a href="" className='text-black hover:text-blue-400 sm:hidden lg:block sm:flex-col'>Third Link</a>
            <img src="../img/58px.png" alt="" />
            <a href="" className='text-black hover:text-blue-400 sm:hidden lg:block sm:flex-col'>Fourth Link</a>
            <a href="" className='text-black hover:text-blue-400 sm:hidden lg:block sm:flex-col'>Fifth Link</a>
            <a href="" className='text-black hover:text-blue-400 sm:hidden lg:block sm:flex-col'>Sixth Link</a>
            <div className='text-black text-3xl lg:hidden '>
            <CiSearch />
        </div>
       
        </div>
       
    </div>
  )
}

export default Navbar