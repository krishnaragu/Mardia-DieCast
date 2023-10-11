import './globals.css'
import { Roboto } from 'next/font/google'

const inter = Roboto({ subsets: ['latin'], weight: '400', display: 'swap' })

export const metadata = {
  title: 'Mardiapdc',
  description: 'Your One-Stop Destination for all Machinery Mechanical Spare Parts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
