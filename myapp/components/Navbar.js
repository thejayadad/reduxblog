'use client'
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const name = useSelector(state => state.user.name);
  return (
    <header className='px-4 py-12'>
        <div className='flex justify-between max-w-screen-xl mx-auto'>
        <Link href={'/'}>Home</Link>
        <div className='flex'>
        <span>{name}</span>
        </div>
        </div>
    </header> 
  )
}

export default Navbar