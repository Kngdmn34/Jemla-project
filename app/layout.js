import './globals.css'

import { Poppins } from 'next/font/google'
import UserProvider from '@/app/context/user';
import CartProvider from '@/app/context/cart';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700'] })

export const metadata = {
  title: 'Jemla ',
  description: 'Jemla App Beta',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ToastContainer />
        <UserProvider>
          <CartProvider>
            {children}
          </CartProvider>
        
        </UserProvider>
        </body>
    </html>
  )
}
