import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { Row, Col } from '../components/helper'
import titlepic from '../pics/roundbox1.jpg'
import roundbox4 from '../pics/roundbox4.jpg'
import roundbox2 from '../pics/roundbox2.jpg'
import ShopifyBuy from '@shopify/buy-button-js'

export default function Home() {

  const caliberList = () => {
    const html = []
    const list = ['.22 LR', '.22 WMR', 'FN 5.7 x 28mm', '.25 ACP', '.32 ACP', '7.62 x 25mm Tokarev', '.327 Magnum', '.30 Super Carry', '.380 ACP', '9mm', '.357 Sig', '.38 S&W', '.357 Magnum', '.38 Special', '.38 Super', '.40 S&W', '10mm', '.41 Remington Magnum', '.44 Special', '.44 Magnum', '.45 ACP', '.45 Colt', '.454 Casull', '.50 AE', '.500 S&W Magnum']
    list.forEach(x => html.push(<Row>{x}</Row>) )
    return html
  }

return (
  <Col
    sx={{ fontFamily: 'Balthazar'}}
    // width='93%'
    alignItems='center'
    // border='1px solid white'
    // margin='2vh 8vw 0 .5vw'
  >

    <Row
      p='10vh 0'
      fontSize='15vw'
      sx={{ fontFamily: 'Bellefair'}}
      // border='1px solid white'
    >
      ROUNDBOX
    </Row>

    <Row
      width='90vw'
      height='21vw'
      style={{
        backgroundImage: `url(${titlepic})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      }}
      // border='1px solid white'
    />

    <Row
      backgroundColor='white'
      m='6vh 0'
      p='1vw'
      borderRadius='10px'
      justifyContent='center'
      // border='1px solid white'
    >
      <Link
        to='https://www.etsy.com/shop/WoodArtisan909'
        // to='https://a3850f-b6.myshopify.com/'
        // to='https://a3850f-b6.myshopify.com/cart/49073978048826:1?channel=buy_button'
        // to='https://a3850f-b6.myshopify.com/cart/49073978081594:1?channel=buy_button'
        target='_blank'
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          color: 'black',
          padding: '1vw',
        }}
      >
        {`>>`} Link to Store {`<<`}
      </Link>
    </Row>

    <Row
      textAlign='center'
      justifyContent='center'
      m='0 0 7vh 0'
      p='.5vw 2vw'
      backgroundColor='yellow'
      sx={{
        color: 'black'
      }}
      // border='1px solid white'
    >
      This website is under construction. Thank you for your patience.
    </Row>

    <Row
      // w='100vw'
      margin='0 2vw'
      // border='1px solid white'
    >
      <Row
        width='100%'
        height='auto'
        style={{
          backgroundImage: `url(${roundbox4})`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }}
        // border='1px solid white'
      />

      <Row
        m='1vw 0'
        p='1vw 1vw'
        textAlign='center'
        // border='1px solid white'
      >
        Roundbox is a display case of 25 popular pistol cartridges organized in ascending order of bullet diameter (not cartridge diameter). It makes a great educational tool for customers and is also an eye-catching decoration for your home.
      </Row>
    </Row>

    <Row
      m='5vh 2vw'
      // margin='2vh 7vw 0 .5vw'
    >
      <Row
        p='1vw 1vw'
        textAlign='center'
        // border='1px solid white'
      >There will be slight variations in the ammo from Roundbox to Roundbox, as we use whatever rounds are available. For instance, some rounds may be nickle-plated, some bullet types may be hollow-point, and some rounds may be very old.</Row>
      <Row
        width='100%'
        height='auto'
        style={{
          backgroundImage: `url(${roundbox2})`,
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat'
        }}
        // border='1px solid white'
      />
    </Row>

    <Col
      m='2vh 0'
    >
      <Row
        m='0 0 5vw 0'
      >Check out our short video on Youtube:</Row>
      {/* <Row><iframe width="467" height="830" src="https://www.youtube.com/embed/fuN-K80VuLU" title="Roundbox" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Row> */}
      <Row
        component='iframe'
        // justifySelf='center'
        // width='80vw'
        width='auto'
        height='80vh'
        // height='auto'
        src="https://www.youtube.com/embed/fuN-K80VuLU"
        title="Roundbox"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      /> 
    </Col>

    <Row
      width='80%'
      m='5vh 0 0 0'
      // margin='2vh 7vw 0 .5vw'
    >
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
          p='.5vw'
          // border='1px solid white'
          // justifyContent='center'
        // >If you'd like a Roundbox different from the default one, send us a message on Etsy and we'll see what we can do. We can do things like sort the rounds for you differently or replace elements with something else like an image or other text.</Row>
        >Email:</Row>

        <Row
          p='.5vw'
          // border='1px solid white'
        >
          roundbox.
          prettygoodinc
          @gmail.com
        </Row>

        <Row
          p='.5vw'
          m='5vw 0 0 0'
          // border='1px solid white'
        >
          Return Policy:
        </Row>

        <Row
          p='.5vw'
          // border='1px solid white'
        >
          If something isn't right with your Roundbox, let us know by sending us an email along with a picture, and we'll do everything we can to make it right.
        </Row>

        {/* <Row
          p='.5vw'
          border='1px solid white'
        >
          If you plan on displaying or selling Roundbox in your store, send us an email for a discount!
        </Row> */}

      </Col>
    </Row>

  </Col>
)
}