import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './components/Providers'
import Appbar from './components/Appbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='h-full' lang="en">
      <body className={`flex flex-col justify-center min-h-full ${inter.className}`}>
        <Providers>
          <Appbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
