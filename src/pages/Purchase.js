import React from 'react'
import { Row, Col } from '../components/helper'
import rb1 from '../pics/rb1.jpg'
import rb2 from '../pics/rb2.jpg'
import rbs1 from '../pics/rbs1.jpg'
import rbs2 from '../pics/rbs2.jpg'

export default function Purchase() {

  return (
    <Col>
      <Row
        m='20px 0 0 0'
        justifyContent='center'
        border='1px white solid'
      >Purchase Page</Row>

      <Col
        w='80%'
        m='0 5%'
        p='5% 0 0 0'
        // justifyContent='center'
        border='1px white solid'
      >
        <Row
          p='0 0 0 5%'
          border='1px white solid'
        >Roundbox</Row>
        <Col
          m='2.5%'
          border='1px white solid'
        >
          <Row
            // w='50%'
            justifyContent='space-evenly'
            border='1px white solid'
          >
            <img
              src={rb1}
              alt='roundbox'
              style={{ height: '30vw' }}
            />
            <img
              src={rb2}
              alt='roundbox'
              style={{ height: '30vw' }}
            />
          </Row>
          <Row
            // w='70vw'
            // justifyContent='right'
            p='2%'
            border='1px white solid'
          >
            Description of Roundbox
          </Row>
        </Col>
      </Col>

      <Col
        w='80%'
        m='0 5%'
        p='5% 0 0 0'
        // justifyContent='center'
        border='1px white solid'
      >
        <Row
          p='0 0 0 5%'
          border='1px white solid'
        >Roundbox with Stand</Row>
        <Col
          m='2.5%'
          border='1px white solid'
        >
          <Row
            // w='50%'
            justifyContent='space-evenly'
            border='1px white solid'
          >
            <img
              src={rbs1}
              alt='roundbox with stand'
              style={{ height: '30vw' }}
            />
            <img
              src={rbs2}
              alt='roundbox with stand'
              style={{ height: '30vw' }}
            />
          </Row>
          <Row
            // w='70vw'
            // justifyContent='right'
            border='1px white solid'
            p='2%'
          >
            It's Roundbox, but with a stand included!
          </Row>
        </Col>
      </Col>

    </Col>
  )
}