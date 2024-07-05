import React from 'react'
import { Link } from "react-router-dom"
// import { Button } from '@mui/material'
import { Row, Col } from './helper'

export default function Navbar() {

  return (
    <Row
      m='1vw'
      p='1vw'
      justifyContent='space-around'
      border='1px solid white'
    >
      <Link
        to='/'
        // style={{ textDecoration: 'none' }}
      >
        <Row>Home</Row>
      </Link>
      <Link
        to='/purchase'
        // style={{ textDecoration: 'none' }}
      >
        <Row>Purchase</Row>
      </Link>
      <Link
        to='/faq'
        // style={{ textDecoration: 'none' }}
      >
        <Row>FAQ</Row>
      </Link>
      <Link
        to='/about'
        // style={{ textDecoration: 'none' }}
      >
        <Row>About</Row>
      </Link>
    </Row>
  )
}