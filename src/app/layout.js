import {AppProvider} from "@/components/AppContext";
import Header from "@/components/layout/Header";
import { Roboto } from 'next/font/google';
import './globals.css'
import {Toaster} from "react-hot-toast";
import Logo from '@/Images/logo.jpg'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: "Alberto's Pizza",
  image: Logo,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        <main className=''>
          <AppProvider>
            <Toaster />
            <Header />
            {children}
            <footer className="border-t p-8 text-center text-gray-500 mt-16">
              &copy;2024 Alberto&apos;s Pizza
            </footer>
          </AppProvider>
        </main>
      </body>
    </html>
  )
}
