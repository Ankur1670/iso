import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/navbar/Navbar'
import Banner from './component/banner/Banner'
import About from './component/about/About'
import Process from './component/process/Process'
import Iso from './component/iso-cer/Iso'
// import Services from './component/services/services'
import Doc from './component/document/Doc'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Price from './component/price/Price'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

   <Navbar/>
   <Banner/>
<About/>
{/* <Services/> */}
<Process/>
<Iso/>
<Doc/>
<Price/>
<Contact/>
{/* <Faqs/> */}
<Footer/>
    </>
  )
}

export default App
