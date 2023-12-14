import "../../styles/reset.css"
import "../../styles/global.css"

import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import { Inter } from 'next/font/google'
const inter = Inter({subsets: ['latin'],display: 'swap',})

const layout = ({children}) => {
  return (
    <html lang='en'className={inter.className}>
        <body className="container">
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </body>
    </html>
  )
}

export default layout