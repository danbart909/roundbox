import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Button } from '@mui/material'
import Alert from '@mui/material/Alert'
import { Row, Col } from '../components/helper'
import titlepic from '../images/roundbox1.jpg'

export default function Home() {

  // const [ alert, setAlert ] = useState('none')

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
        m='1vw 0'
        p='2vw 1vw'
        alignItems='center'
        // fontSize='calc(24px + 6 * ((100vw - 335px) / 1265))'
        border='1px solid white'
        // sx={{ fontFamily: 'Crimson Text' }}
      >
      
        <Row
          p='0 0 20px 0'
          fontSize='15vw'
        sx={{ fontFamily: 'Bellefair'}}
        >ROUNDBOX</Row>

        <Col>
          <Row
            backgroundColor='white'
            border='1px solid white'
            borderRadius='10px'
            justifyContent='center'
          >
            <Link
              to='/purchase'
              // target='_blank'
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
                color: 'black',
                padding: '1vw',
              }}
            >{`>>`} Store coming soon! {`<<`}</Link>
          </Row>

          <Row
            textAlign='center'
            m='5vh 0 0 0'
            justifyContent='center'
          >
            If you've found this website and want to buy a Roundbox, please email us at roundbox.prettygoodinc@gmail.com.
          </Row>

          <Row
            textAlign='center'
            justifyContent='center'
            m='5vh 0 0 0'
          >
            Please be patient as we set up our website.
          </Row>
  
          {/* <Row
            backgroundColor='white'
            border='1px solid white'
            borderRadius='10px'
            m='0 0 0 2vw'
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
            >{`>>`} Buy on Etsy{`<<`}</Link>
          </Row> */}
        </Col>
      
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
        m='1vw 0'
        p='1vw 1vw'
        border='1px solid white'
        textAlign='center'
      >Roundbox is a display case of 25 popular pistol cartridges organized in ascending order of bullet diameter (not cartridge diameter). It makes a great educational tool for customers and is also an eye-catching decoration for your home.</Row>

{/* Roundbox is a display of 25 of the most popular pistol calibers arranged in order of bullet size (not case size). Works great as a visual aid in a gun shop, or as a decoration in your own home. You can hang it on the wall or prop it up on a desk or over the fireplace. Makes a great gift! */}

{/* While they are live rounds, each one is securely glued in to slots in the wood dug out by a laser, and are entirely useless as a weapon. It's legal to ship ammunition used in arts in crafts without a FFL. */}

      <Row
        m='1vw 0'
        p='1vw 1vw'
        border='1px solid white'
        textAlign='center'
      >There will be slight variations in the ammo from Roundbox to Roundbox, as we use whatever rounds are available. For instance, some rounds may be nickle-plated, some bullet types may be hollow-point, and some rounds may be very old. All rounds are live, but tightly secured.</Row>

      <Row>
        <Col
          m='1vw 0'
          p='1vw'
          width='50%'
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
          m='1vw 0'
          p='1vw'
          width='50%'
          border='1px solid white'
          // sx={{ fontFamily: 'Linden Hill' }}
        >
          <Row
            p='0 .5vw'
            // justifyContent='center'
          // >If you'd like a Roundbox different from the default one, send us a message on Etsy and we'll see what we can do. We can do things like sort the rounds for you differently or replace elements with something else like an image or other text.</Row>
          >Email:</Row>
          <Row
            p='.5vw'
          >roundbox.prettygoodinc@gmail.com</Row>
        </Col>
      </Row>

    </Col>
  )
}