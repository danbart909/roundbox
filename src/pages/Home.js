import React from 'react'
import { Link } from "react-router-dom"
import { Button } from '@mui/material'
import { Row, Col } from '../components/helper'
import titlepic from '../images/roundbox1.jpg'

export default function Home() {

  const caliberList = () => {
    const html = []
    const list = ['.22 LR', '.22 WMR', 'FN 5.7 x 28mm', '.25 ACP', '.32 ACP', '7.62 x 25mm Tokarev', '.327 Magnum', '.30 Super Carry', '.380 ACP', '9mm', '.357 Sig', '.38 S&W', '.357 Magnum', '.38 Special', '.38 Super', '.40 S&W', '10mm', '.41 Remington Magnum', '.44 Special', '.44 Magnum', '.45 ACP', '.45 Colt', '.454 Casull', '.50 AE', '.500 S&W Magnum']
    list.forEach(x => html.push(<Row>{x}</Row>) )
    return html
  }

  return (
    <Col
      // p='1vw'
      // gap='1vw'
      sx={{ fontFamily: 'Balthazar'}}
    >

      <Col
        m='1vw'
        p='2vw 1vw'
        alignItems='center'
        // fontSize='calc(24px + 6 * ((100vw - 335px) / 1265))'
        border='1px solid white'
        // sx={{ fontFamily: 'Crimson Text' }}
      >
      
        <Row
          p='0 0 20px 0'
          fontSize='15vw'
        >ROUNDBOX</Row>

        <Row
          backgroundColor='white'
          border='1px solid white'
          m='0 0 2vw 0'
        >
          <Link
            to='/Purchase'
            target='_blank'
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: 'black',
              padding: '1vw'
            }}
          >{`>>`} Buy Here {`<<`}</Link>
        </Row>

        <Row
          backgroundColor='white'
          border='1px solid white'
          m='0 0 2vw 0'
        >
          <Link
            to='https://www.etsy.com/listing/1602435056/bullet-display-handgun-cartridge'
            target='_blank'
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              color: 'black',
              padding: '1vw'
            }}
          >{`>>`} Buy on Etsy {`<<`}</Link>
        </Row>
      
      </Col>

      <Row
        // component='img'
        w='95vw'
        height='20vw'
        style={{
          backgroundImage: `url(${titlepic})`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }}
        // sx={{
          // height: 400,
          // width: '90%',
          // maxHeight: { xs: 233, md: 167 },
          // maxWidth: { xs: 350, md: 250 },
        // }}
        // src={`url(${titlepic})`}
      >
      </Row>

      <Row
        m='1vw'
        p='1vw 1vw'
        border='1px solid white'
        textAlign='center'
      >Roundbox is a display case of 25 popular pistol cartridges organized in ascending order of bullet diameter (not cartridge diameter). It makes a great educational tool for customers and is also an eye-catching decoration for your home.</Row>
      
      <Row>
        <Col
          m='1vw'
          p='1vw'
          width='45%'
          border='1px solid white'
          // sx={{ fontFamily: 'Balthazar' }}
        >
          <Row
            p='1vw'
            justifyContent='center'
          >List of calibers displayed (from left to right)</Row>
          {caliberList()}
        </Col>

        <Col
          m='1vw'
          p='1vw'
          width='45%'
          border='1px solid white'
          // sx={{ fontFamily: 'Linden Hill' }}
        >
          <Row
            p='1vw'
            justifyContent='center'
          >If you'd like a Roundbox different from the default one, send us a message on Etsy and we'll see what we can do. We can do things like sort the rounds for you differently or replace elements with something else like an image or other text.</Row>
        </Col>
      </Row>

    </Col>
  )
}