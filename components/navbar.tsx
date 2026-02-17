"use client "
import { Map, MessageSquare, Sparkle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='border-b bg-background'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <div className='flex items-center gap-6'>
          <Link href="/">
            <div className='flex items-center gap-2'>
              <div className='h-8 w-8 rounded-full bg-linear-to-r from-blue-500 to-purple-500 items-center justify-center flex'>
                <Sparkle className='h-6 w-6 text-white' />
              </div>
              <span className='capitalize text-xl font-bold'>feedback fusion</span>
            </div>
          </Link>

          <Link href="/roadmap" className='text-sm hover:text-primary flex items-center gap-1'>
            <Map className='h-5 w-5'/>
            Roadmap
          </Link>
          <Link href="/roadmap" className='text-sm hover:text-primary flex items-center gap-1'>
            <MessageSquare className='h-5 w-5'/>
            Feedback
          </Link>
        </div>
        <div>Signin</div>
      </div>
    </nav>
  )
}

export default Navbar