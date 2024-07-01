import { useState } from 'react'
import './App.css'
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from "./container";
import { CTA, Brand, Navbar, } from "./components";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
