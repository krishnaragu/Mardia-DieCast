import './globals.css'
import { Open_Sans } from 'next/font/google'

const inter = Open_Sans({ subsets: ['latin'], weight: '400', display: 'swap' })

export const metadata = {
  title: 'Mardiapdc',
  description: 'Your One-Stop Destination for all Machinery Mechanical Spare Parts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body >{children}</body>
    </html>
  )
}
