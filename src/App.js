import './css/App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Intro from './components/Intro'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Navbar />
        <div className='container'>
          <Intro path='/#about' />
          <About />
          <Portfolio path='/#portfolio' />
          <Contact />
        </div>
        <Footer />
      </div>
    </Router>
  )
}
