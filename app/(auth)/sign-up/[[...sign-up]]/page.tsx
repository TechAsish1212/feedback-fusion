'use client'
import { SignUp } from '@clerk/nextjs'
import { useTheme } from 'next-themes'
import { dark } from '@clerk/themes'

export default function Page() {
    const { theme, setTheme } = useTheme();
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <SignUp appearance={{
                baseTheme: theme === 'light' ? dark : undefined
            }} />
        </div>
    )
}