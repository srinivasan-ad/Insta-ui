'use client'
import { RecoilRoot } from "recoil";
import './globals.css'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'



const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>
          Instagram-2.0
        </title>
      </head>
      <body className={inter.className}>


        <SessionProvider>
          <RecoilRoot>
            {children}
          </RecoilRoot>
        </SessionProvider>

      </body>
    </html>
  )
}

