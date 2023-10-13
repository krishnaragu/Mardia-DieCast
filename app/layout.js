import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'], weight: '400', display: 'swap' })

export const metadata = {
  title: 'Mardiapdc',
  description: 'Your One-Stop Destination for all Machinery Mechanical Spare Parts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
