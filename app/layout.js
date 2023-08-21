import './globals.css'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
const poppins = Poppins({
  weight:['300','500'],
  subsets: ['latin'] })

export const metadata = {
  title: 'Next js',
  description: 'sssssssssssssssssss',
  keyworda:'toutube  ddv  next. js'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <body className={poppins.className}>
      <h1 className='heading'>Cricnote Website Live Server</h1>

   

        {children}
    
      </body>
    </html>
  )
}
