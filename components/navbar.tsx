// "use client "
// import { Map, MessageSquare, Sparkle } from 'lucide-react'
// import Link from 'next/link'
// import React from 'react'
// import ThemeToggle from './theme-toggle'
// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
// import { Button } from './ui/button'

// const Navbar = () => {
//   return (
//     <nav className='border-b bg-background'>
//       <div className='container mx-auto flex h-16 items-center justify-between px-4'>
//         <div className='flex items-center gap-6'>
//           <Link href="/">
//             <div className='flex items-center gap-2'>
//               <div className='h-8 w-8 rounded-full bg-linear-to-r from-blue-500 to-purple-500 items-center justify-center flex'>
//                 <Sparkle className='h-6 w-6 text-white' />
//               </div>
//               <span className='capitalize text-xl font-bold'>feedback fusion</span>
//             </div>
//           </Link>

//           <Link href="/roadmap" className='text-sm hover:text-primary flex items-center gap-1'>
//             <Map className='h-5 w-5' />
//             Roadmap
//           </Link>
//           <Link href="/feedback" className='text-sm hover:text-primary flex items-center gap-1'>
//             <MessageSquare className='h-5 w-5' />
//             Feedback
//           </Link>
//         </div>
//         <div className='flex items-center gap-4 '>
//           <ThemeToggle />
//           <SignedOut>
//             <SignInButton>
//               <Button asChild>
//                 <Link href='/sign-in'>Sign In</Link>
//               </Button>
//             </SignInButton>
//           </SignedOut>
//           <SignedIn>
//               <UserButton />
//             </SignedIn>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

// "use client"
// import { Map, MessageSquare, Sparkle, Menu, X } from 'lucide-react'
// import Link from 'next/link'
// import React, { useState } from 'react'
// import ThemeToggle from './theme-toggle'
// import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
// import { Button } from './ui/button'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <nav className='border-b bg-background'>
//       <div className='container mx-auto flex h-16 items-center justify-between px-4'>


//         {/* Desktop Links */}
//         <div className='flex  items-center  gap-6'>
//           {/* Logo */}
//           <Link href="/">
//             <div className='flex items-center gap-2'>
//               <div className='h-8 w-8 rounded-full bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center'>
//                 <Sparkle className='h-6 w-6 text-white' />
//               </div>
//               <span className='capitalize text-xl font-bold'>feedback fusion</span>
//             </div>
//           </Link>

//           <Link href="/roadmap" className='hidden md:flex text-sm hover:text-primary items-center gap-1'>
//             <Map className='h-5 w-5' />
//             Roadmap
//           </Link>
//           <Link href="/feedback" className='hidden md:flex text-sm hover:text-primary  items-center gap-1'>
//             <MessageSquare className='h-5 w-5' />
//             Feedback
//           </Link>
//         </div>

//         {/* Right Section */}
//         <div className='flex items-center gap-4'>
//           <ThemeToggle />

//           {/* Desktop Sign In */}
//           <div className='hidden md:block'>
//             <SignedOut>
//               <SignInButton>
//                 <Button asChild>
//                   <Link href='/sign-in'>Sign In</Link>
//                 </Button>
//               </SignInButton>
//             </SignedOut>
//           </div>

//           {/* Hamburger Menu - only show on mobile */}
//           <button
//             className='md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary'
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {/* Only render this when isOpen is true */}
//       {isOpen && (
//         <div className='md:hidden border-t bg-background'>
//           <div className='flex flex-col gap-2 p-4'>
//             <Link href="/roadmap" className='text-sm hover:text-primary flex items-center gap-1'>
//               <Map className='h-5 w-5' />
//               Roadmap
//             </Link>
//             <Link href="/feedback" className='text-sm hover:text-primary flex items-center gap-1'>
//               <MessageSquare className='h-5 w-5' />
//               Feedback
//             </Link>
//             <SignedOut>
//               <SignInButton>
//                 <Button asChild className='w-full'>
//                   <Link href='/sign-in'>Sign In</Link>
//                 </Button>
//               </SignInButton>
//             </SignedOut>
//             <SignedIn>
//               <UserButton />
//             </SignedIn>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }

// export default Navbar


"use client"

import { Map, MessageSquare, Sparkle, Menu, X } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"
import ThemeToggle from "./theme-toggle"
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs"
import { Button } from "./ui/button"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">

        {/* Left Section (Logo + Desktop Links) */}
        <div className="flex items-center gap-6">

          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <Sparkle className="h-6 w-6 text-white" />
              </div>
              <span className="capitalize text-xl font-bold">
                feedback fusion
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <Link
            href="/roadmap"
            className="hidden md:flex text-sm hover:text-primary items-center gap-1"
          >
            <Map className="h-5 w-5" />
            Roadmap
          </Link>

          <Link
            href="/feedback"
            className="hidden md:flex text-sm hover:text-primary items-center gap-1"
          >
            <MessageSquare className="h-5 w-5" />
            Feedback
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          <ThemeToggle />

          {/* Desktop Auth */}

          {/* Show Sign In when logged out */}
          <SignedOut>
            <div className="hidden md:block">
              <SignInButton>
                <Button asChild>
                  <Link href="/sign-in">Sign In</Link>
                </Button>
              </SignInButton>
            </div>
          </SignedOut>

          {/* ⭐ FIX: Show User icon when logged in (desktop) */}
          <SignedIn>
            <div className="hidden md:block">
              <UserButton />
            </div>
          </SignedIn>

          {/* Hamburger Menu (Mobile only) */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="flex flex-col gap-2 p-4">

            <Link
              href="/roadmap"
              className="text-sm hover:text-primary flex items-center gap-1"
            >
              <Map className="h-5 w-5" />
              Roadmap
            </Link>

            <Link
              href="/feedback"
              className="text-sm hover:text-primary flex items-center gap-1"
            >
              <MessageSquare className="h-5 w-5" />
              Feedback
            </Link>

            {/* Mobile Auth */}
            <SignedOut>
              <SignInButton>
                <Button asChild className="w-full">
                  <Link href="/sign-in">Sign In</Link>
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar