import './globals.css'
import Nav from './nav'

export const metadata = {
  title: 'TIAS APP',
  description: 'The pure sandbox.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gray-700 text-white'>
        <Nav/>
        {children}
      </body>
    </html>
  )
}
