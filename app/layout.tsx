import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Feedback Fusion",
  description: "A platform for users to suggest and vote on features ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} min-h-screen flex flex-col `}>
          {/* navbar */}
          <Navbar />
          {/* main section */}
          <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
          {/* footer */}
          <Footer />
          <Toaster />

        </body>
      </html>
    </ClerkProvider>
  );
}
