'use client'

import Link from 'next/link'
import React from 'react'
import { useSelector } from "react-redux";


const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
  return (
    <header className='px-4 py-12'>
        <div className='max-w-screen-xl mx-auto flex justify-between'>
            <Link href={'/'}>HomePage</Link>
            <div className='flex'>
                <span>{quantity}</span>
                <Link href={'/cart'}>Cart</Link>
            </div>
        </div>
    </header>
  )
}

export default Navbar