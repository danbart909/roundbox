import React from 'react'
import { Link } from "react-router-dom"
import { Button } from '@mui/material'
import { Row, Col } from '../components/helper'

export default function Home() {

  return (
    <Col
      // p='1vw'
      // gap='1vw'
    >
      <Row
        m='1vw'
        p='2vw 1vw'
        justifyContent='center'
        // fontSize='calc(24px + 6 * ((100vw - 335px) / 1265))'
        border='1px solid white'
      >Roundbox</Row>
      <Row
        m='1vw'
        p='1vw'
        border='1px solid white'
      >The Roundbox is a display case with 25 rounds of popular pistol cartridges, with each one displayed alongside a cutoff of the bottom of the cartridge and the actual bullet. The information displayed next to each round makes it a useful educational tool to customers from businesses, as well as serving to make the display worth having in your home as well.</Row>
      <Row
        m='1vw'
        p='1vw'
        border='1px solid white'
      >The base of the Roundbox is made with fine Canadian Maple made from virgin maple saplings stitched together with silk from Malaysian Fupplebee Spiders. The diamond case ensures maximum stability and lifelong visibility. Improved finish no longer grows a thin green film over the whole surface of the box! The box also no longer causes acid burns when touched.</Row>
    </Col>
  )
}