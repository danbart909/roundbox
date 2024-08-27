import React, { Box } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Sticky } from 'semantic-ui-react'
import { Helmet } from "react-helmet"
import { Row, Col } from './components/helper'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Info from './pages/Info'
import Purchase from './pages/Purchase'

export default function App() {
  return (
      <Col
        width='100%'
        minHeight='100vh'
        backgroundColor='black'
      >
        {/* <TopNav />
        <Sticky>
          <BottomNav />
        </Sticky> */}
  
        {/* <Navbar /> */}

        <Helmet>
          <meta charSet="utf-8" />
          <title>Roundbox</title>
          <link rel="canonical" href="https://roundbox.prettygoodinc.com" />
        </Helmet>
  
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='faq' element={<FAQ />} />
          <Route path='info' element={<Info />} />
          <Route path='purchase' element={<Purchase />} />
        </Routes>
  
        {/* <Footer /> */}
      </Col>
  );
}