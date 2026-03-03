"use client"

import { Map, MessageSquare, Sparkle, Menu, X, Shield } from "lucide-react"
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
              <div className="h-8 w-8 rounded-full bg-linear-to-r from-teal-500 to-indigo-500 flex items-center justify-center">
                <Sparkle className="h-6 w-6 text-white" />
              </div>
              <span className="capitalize text-xl font-bold">
                Feed<span className="text-teal-400">Nova</span>
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
          <SignedIn>
            <Link href='/admin' className="text-sm hover:text-primary transition-colors flex items-center gap-1">
            <Shield className="h-4 w-4" />
            Admin
            </Link>
          </SignedIn>
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